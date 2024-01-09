
pannellum.viewer('panorama', {
    "autoLoad":true,
    "default": {
        "firstScene": "panorama-1",
        "author": "miguel",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "panorama-1": {
            "title": "Sala",
            "hfov": 110,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "../img/Cam01 edit.jpg",
            "hotSpots": [
                {
                    "pitch": -1,
                    "yaw": 145,
                    "type": "scene",
                    "text": "Pasillo",
                    "sceneId": "panorama-2"
                }
            ]
        },

        "panorama-2": {
            "title": "Pasillo",
            "hfov": 110,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "../img/Cam02 edit.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 40,
                    "type": "scene",
                    "text": "estudio",
                    "sceneId": "panorama-3"
                },
                {
                    "pitch": 0,
                    "yaw": -370,  // Ajusta este valor para apuntar hacia la izquierda
                    "type": "scene",
                    "text": "Anterior",
                    "sceneId": "panorama-1"
                },
                {
                    "pitch": 0,
                    "yaw": 130,  // Ajusta este valor para apuntar hacia la izquierda
                    "type": "scene",
                    "text": "Cuarto-1",
                    "sceneId": "panorama-4"
                },
                {
                    "pitch": 0,
                    "yaw": 180,  // Ajusta este valor para apuntar hacia la izquierda
                    "type": "scene",
                    "text": "Cuarto-2",
                    "sceneId": "panorama-5"
                }
            ]
        },
        "panorama-3": {
            "title": "Estudio",
            "hfov": 110,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "../img/Cam03 edit.jpg",
            "hotSpots": [
                {
                    "pitch": -4,
                    "yaw": -80,
                    "type": "scene",
                    "text": "pasillo",
                    "sceneId": "panorama-2"
                },
            ]
        },
        "panorama-4": {
            "title": "Cuarto-1",
            "hfov": 110,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "../img/Cam04 edit.jpg",
            "hotSpots": [
                {
                    "pitch": -4,
                    "yaw": -87,
                    "type": "scene",
                    "text": "pasillo",
                    "sceneId": "panorama-2"
                },
            ]
        },
        "panorama-5": {
            "title": "Cuarto-2",
            "hfov": 110,
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "../img/Cam05 edit.jpg",
            "hotSpots": [
                {
                    "pitch": -4,
                    "yaw": -6,
                    "type": "scene",
                    "text": "pasillo",
                    "sceneId": "panorama-2"
                },
            ]
        },


        // Agrega más escenas según sea necesario
    }
});