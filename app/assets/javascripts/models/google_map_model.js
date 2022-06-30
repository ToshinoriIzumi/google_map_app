class GoogleMapModel {
    constructor(center, zoom, element) {
        this.center = center;
        this.zoom = zoom;
        this.element = element;
    }

    build() {
        this.make_base_map();
    }

    make_base_map() {
        this.map = new google.maps.Map(
            this.element,
            {
                center: this.center,
                zoom: this.zoom
            }
        );
    }
}

class GoogleMapModelWithMakers extends GoogleMapModel {
    constructor(center, zoom, element, maker_positions) {
        super(center, zoom, element);
        this.maker_positions = maker_positions;
        this.makers = [];
    }

    build() {
        this.make_base_map();
        this.make_makers();
    }

    make_makers() {
        for(let i = 0; i < this.maker_positions.length; i++) {
            this.makers.push(
                new google.maps.Marker({
                    position: this.maker_positions[i],
                    map: this.map
                })
            );
        }
    }
}

class GoogleMapModelWithMakerAndInfo extends GoogleMapModelWithMakers {
    constructor(center, zoom, element, maker_positions, post_ids) {
        super(center, zoom, element, maker_positions);
        this.post_ids = post_ids;
        this.info_windows = [];
    }
    
    build() {
        this.make_base_map();
        this.make_makers();
        this.make_info_windows();
    }

    make_info_windows() {
        for(let i = 0; i < this.post_ids.length; i++) {
            this.info_windows.push(
                new google.maps.InfoWindow({
                    content: '<a href="/posts/' + this.post_ids[i] + '">投稿へのリンク</>'
                })
            )
        }
        for (let i = 0; i < this.makers.length; i++) {
            this.makers[i].addListener('click', () => {
                this.info_windows[i].open(this.map, this.makers[i]);
            });
        }
    }
}