class GoogleMapController {
    constructor(center, zoom, map_id, map_data_class_name) {
        this.center = center;
        this.zoom  = zoom;
        this.map_id = map_id;
        this.map_data_class_name = map_data_class_name;
    }

    build() {
        const map_element = document.getElementById(this.map_id);
        const map_data_elements = document.getElementsByClassName(this.map_data_class_name);

        let google_map_model = null;
        if (map_data_elements[0].dataset.lat != undefined && map_data_elements[0].dataset.lng != undefined && map_data_elements[0].dataset.info != undefined) {
            let infos = [];
            let positions = [];
            for (let i = 0; i < map_data_elements.length; i++) {
                positions.push(
                    {
                        lat: parseFloat(map_data_elements[i].dataset.lat),
                        lng: parseFloat(map_data_elements[i].dataset.lng)
                    }
                );
                infos.push(
                    map_data_elements[i].dataset.info
                );

            }
            google_map_model = new GoogleMapModelWithMakerAndInfo(
                this.center,
                this.zoom,
                map_element,
                positions,
                infos
            );

        } else if (map_data_elements[0].dataset.lat != undefined && map_data_elements[0].dataset.lng != undefined) {
            let positions = [];
            for (let i = 0; i < map_data_elements.length; i++) {
                positions.push(
                    {
                        lat: parseFloat(map_data_elements[i].dataset.lat),
                        lng: parseFloat(map_data_elements[i].dataset.lng)
                    }
                )
            }

            google_map_model = new GoogleMapModelWithMakers(
                this.center,
                this.zoom,
                map_element,
                positions
            );
        } else {
            google_map_model = new GoogleMapModel(
                this.center,
                this.zoom,
                map_element
            );
        }
        google_map_model.build();
    }
}