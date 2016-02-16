/*
 * Train
 *
 * Copyright (c) 2016 Erik Wibowo
 */
(function ($) {

    var setStyle = function (element, props) {
        for (var property in props){
            element.style[property] = props[property] + ((property == 'width' || property == 'height') ? 'px' : '');
        }
    };

    var setTrackWidth = function (trackElement, trainLength, currentTrackWidth) {
        var widthAsPercentage = (trainLength / currentTrackWidth + 1) * 100;
        trackElement.style.width = widthAsPercentage + '%';
    };

    $.train = function (element, options) {
        options = options || {};
        var elementWidth = element.offsetWidth;
        var car_count = options.car_count || 5,
            speed = options.speed || 2;
        var cars = [];
        var carTimeout = 0;

        var train_length = (car_count + 1) * 50; // each car image size is 48 (or approx. 50)
        setTrackWidth(element, train_length, elementWidth);

        function Car(head, speed, trackElement) {
            this.car = new Image();
            this.car.src = head ? 'assets/img/steam_engine.png' : 'assets/img/railroad_car.png';
            var leftPosition = (-1 * train_length - 200);
            setStyle(this.car, {'position': 'relative', 'left': leftPosition + 'px', 'bottom': 0});
            this.speed = speed;
            this.x = 0;
            this.move = function () {
                this.x += this.speed;
                var translate = 'translateX('+ this.x +'px)';
                if (this.x > elementWidth + train_length + 200) {
                    this.reset();
                }
                //var translate = 'translateX(-300px)';
                setStyle(this.car, {'MozTransform': translate,
                                    'OTransform': translate,
                                    'webkitTransform': translate,
                                    'transform': translate});
            };
            this.reset = function () {
                this.x = 0;
            };

            this.puffSmoke = function () {
                var smoke = new Smoke(this.speed, leftPosition + car_count * 50 + 20 + this.x);
                trackElement.appendChild(smoke.smoke);

                function smokeDrift(){
                    smoke.drift();
                    requestAnimationFrame(function(){smokeDrift()});
                }

                smokeDrift();
            }
        }

        function Smoke(speed, headX) {
            this.smoke = new Image();
            this.smoke.src = 'assets/img/cloud.png';
            this.smoke.width = '10';
            this.smoke.classList.add('smoke');
            this.x = headX;
            this.y = 0;
            setStyle(this.smoke, {'position': 'absolute', 'left': this.x + 'px', 'top': -3 + 'px'});
            this.speed = speed * 0.2;
            this.scale = 1;
            this.opacity = 1;

            this.drift = function () {
                this.x += this.speed;
                this.y -= this.speed;
                this.scale *= 1.01;
                var translate = 'translateY('+ this.y +'px) scale('+ this.scale +')';
                if (this.scale > 4) {
                    this.poof();
                    return;
                }

                setStyle(this.smoke, {'MozTransform': translate,
                    'OTransform': translate,
                    'webkitTransform': translate,
                    'transform': translate});

                if (this.scale > 2) {
                    this.opacity *= 0.95;
                    setStyle(this.smoke, {'opacity': this.opacity});
                }

            };
            this.poof = function () {
                this.smoke.style.animationName = 'fadeout';
                this.smoke.style.animationTimingFunction = 'ease-out';
                this.smoke.style.animationDuration = '3s';
            }
        }

        for (var i = 0; i < car_count; i++) {
            cars.push(new Car(false, speed, element));
        }
        cars.push(new Car(true, speed, element));

        for (i = 0; i < cars.length; i++) {
            element.appendChild(cars[i].car);
        }

        window.addEventListener('resize', function(){
            elementWidth = element.offsetWidth;
            setTrackWidth(element, train_length, elementWidth);
        }, true);

        function move(){
            for (i = 0; i < cars.length; i++) {
                cars[i].move();
            }

            carTimeout = requestAnimationFrame(function(){move()});
        }

        move();

        var puffCount = 0;
        function puffSmoke() {
            if (puffCount % 10 < 3) {
                cars[cars.length - 1].puffSmoke();
            }
            puffCount++;
        }

        setInterval(puffSmoke, 300);


        function cleanUpFadedSmokes() {
            $('.smoke').each(function() {
                if ($(this)[0].style.opacity && $(this)[0].style.opacity < 0.03) {
                    element.removeChild($(this)[0]);
                }
            });
        }

        setInterval(cleanUpFadedSmokes, 10000);
    };

    $.fn.train = function (options) {
        return this.each(function (i) {
            (new $.train(this, options));
        });
    };
}(jQuery));
