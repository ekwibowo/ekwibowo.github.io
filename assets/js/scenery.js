/*
 * Scenery
 *
 * Copyright (c) 2016 Erik Wibowo
 */
(function ($) {

    var setStyle = function (element, props) {
        for (var property in props) {
            element.style[property] = props[property] + ((property == 'width' || property == 'height') ? 'px' : '');
        }
    };

    var Images = {
        'barn': 'assets/img/barn.png',
        'cloud': 'assets/img/cloud.png',
        'shrub': 'assets/img/compost_heap.png',
        'pine': 'assets/img/coniferous_tree.png',
        'pine_sm': 'assets/img/coniferous_tree_small.png',
        'pine_xs': 'assets/img/coniferous_tree_smaller.png',
        'tree': 'assets/img/deciduous_tree.png',
        'tree_sm': 'assets/img/deciduous_tree_small.png',
        'farmhouse': 'assets/img/farm.png',
        'flower': 'assets/img/flower.png',
        'mixedtrees': 'assets/img/forest.png',
        'mixedtrees_sm': 'assets/img/forest_small.png',
        'grass': 'assets/img/grass.png',
        'grass_sm': 'assets/img/grass_small.png',
        'trainwagon': 'assets/img/railroad_car.png',
        'sprout': 'assets/img/sprout.png',
        'trainhead': 'assets/img/steam_engine.png',
        'toinfinitypost': 'assets/img/toinfinity.png',
        'treehouse': 'assets/img/treehouse.png',
        'watertower': 'assets/img/water_tower.png'
    };

    var sceneryList = [
        {'img': Images['pine'], 'leftPosition': 0},
        {'img': Images['pine_sm'], 'leftPosition': 60},
        {'img': Images['pine_xs'], 'leftPosition': 100},
        {'img': Images['mixedtrees_sm'], 'leftPosition': 200},
        {'img': Images['pine'], 'leftPosition': 240},
        {'img': Images['grass'], 'leftPosition': 500},
        {'img': Images['grass'], 'leftPosition': 525},
        {'img': Images['grass'], 'leftPosition': 550},
        {'img': Images['mixedtrees'], 'leftPosition': 575},
        {'img': Images['mixedtrees'], 'leftPosition': 650},
        {'img': Images['grass'], 'leftPosition': 735},
        {'img': Images['grass'], 'leftPosition': 765},
        {'img': 'trafficlight', 'leftPosition': 950},
        {'img': Images['shrub'], 'leftPosition': 1150},
        {'img': Images['shrub'], 'leftPosition': 1175},
        {'img': Images['shrub'], 'leftPosition': 1200},
        {'img': Images['shrub'], 'leftPosition': 1225},
        {'img': Images['shrub'], 'leftPosition': 1250},
        {'img': Images['barn'], 'leftPosition': 1275},
        {'img': Images['farmhouse'], 'leftPosition': 1327},
        {'img': Images['shrub'], 'leftPosition': 1378},
        {'img': Images['shrub'], 'leftPosition': 1403},
        {'img': Images['grass'], 'leftPosition': 1425},
        {'img': Images['grass'], 'leftPosition': 1445},
        {'img': Images['grass_sm'], 'leftPosition': 1630},
        {'img': Images['sprout'], 'leftPosition': 1650},
        {'img': Images['sprout'], 'leftPosition': 1668},
        {'img': Images['sprout'], 'leftPosition': 1686},
        {'img': Images['flower'], 'leftPosition': 1704},
        {'img': Images['flower'], 'leftPosition': 1724},
        {'img': Images['flower'], 'leftPosition': 1744},
        {'img': Images['tree'], 'leftPosition': 1760},
        {'img': Images['sprout'], 'leftPosition': 1764},
        {'img': Images['sprout'], 'leftPosition': 1782},
        {'img': Images['sprout'], 'leftPosition': 1810},
        {'img': Images['sprout'], 'leftPosition': 1828},
        {'img': Images['grass'], 'leftPosition': 1830},
        {'img': Images['grass'], 'leftPosition': 1850},
        {'img': Images['grass_sm'], 'leftPosition': 1870},
        {'img': Images['grass_sm'], 'leftPosition': 1885},
        {'img': Images['grass_sm'], 'leftPosition': 1902},
        {'img': Images['grass_sm'], 'leftPosition': 1919},
        {'img': Images['grass_sm'], 'leftPosition': 1936},
        {'img': Images['sprout'], 'leftPosition': 1955},
        {'img': Images['mixedtrees'], 'leftPosition': 1955},
        {'img': Images['tree'], 'leftPosition': 2025},
        {'img': Images['tree'], 'leftPosition': 2100},
        {'img': Images['mixedtrees'], 'leftPosition': 2175},
        {'img': Images['tree_sm'], 'leftPosition': 2255},
        {'img': Images['treehouse'], 'leftPosition': 2305},
        {'img': Images['mixedtrees'], 'leftPosition': 2380},
        {'img': Images['mixedtrees'], 'leftPosition': 2455},
        {'img': Images['tree'], 'leftPosition': 2530},
        {'img': Images['tree_sm'], 'leftPosition': 2605},
        {'img': Images['tree_sm'], 'leftPosition': 2655},
        {'img': Images['grass_sm'], 'leftPosition': 2710},
        {'img': Images['grass_sm'], 'leftPosition': 2735},
        {'img': Images['grass_sm'], 'leftPosition': 2760},
        {'img': Images['watertower'], 'leftPosition': 2960},
        {'img': Images['grass_sm'], 'leftPosition': 3210},
        {'img': Images['grass_sm'], 'leftPosition': 3235},
        {'img': Images['grass_sm'], 'leftPosition': 3260},
        {'img': Images['grass_sm'], 'leftPosition': 3745},
        {'img': Images['grass_sm'], 'leftPosition': 3765},
        {'img': Images['grass'], 'leftPosition': 3785},
        {'img': Images['toinfinitypost'], 'leftPosition': 3800},
        {'img': Images['grass_sm'], 'leftPosition': 3805},
        {'img': Images['grass_sm'], 'leftPosition': 3825},
        {'img': Images['grass_sm'], 'leftPosition': 3845},
        {'img': Images['grass_sm'], 'leftPosition': 3855},
        {'img': Images['grass'], 'leftPosition': 3870},
        {'img': Images['grass_sm'], 'leftPosition': 3895},
    ];

    $.scenery = function (element) {
        for (var i = 0; i < sceneryList.length; i++) {
            var sceneryItem = sceneryList[i];
            var sceneImage = sceneryItem['img'];
            if (sceneImage == 'trafficlight') {
                var trafficLightDiv = document.createElement('div');
                trafficLightDiv.classList.add('traffic-light');
                setStyle(trafficLightDiv, {'left': sceneryItem['leftPosition'] + 'px'});

                var $trafficLightDiv = $(trafficLightDiv);
                $trafficLightDiv.append('<div class="light left-light"></div>');
                $trafficLightDiv.append('<div class="light right-light"></div>');
                $trafficLightDiv.append('<div class="traffic-light-support"></div>');

                element.appendChild(trafficLightDiv);
            } else {
                var img = new Image();
                img.src = sceneImage;
                setStyle(img, {'left': sceneryItem['leftPosition'] + 'px'});
                element.appendChild(img);
            }
        }
    };

    $.fn.scenery = function () {
        return this.each(function (i) {
            (new $.scenery(this));
        });
    };
}(jQuery));
