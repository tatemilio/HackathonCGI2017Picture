'use strict';

angular.module('radar.draggable', [])

    .directive("ngDraggable", ['$document', function($document){
        return {
            restrict: 'A',
            scope: {
                options: '=ngDraggable',
                item: '=ngItem'
            },
            link: function(scope, elem, attr){
                var startX, startY, x = 0, y = 0, start, stop, drag, item, container, dragged;

                var width  = elem[0].offsetWidth, height = elem[0].offsetHeight;

                start  = scope.options.start;
                drag   = scope.options.drag;
                stop   = scope.options.stop;
                item   = scope.item;
                var id = scope.options.container;
                if (id) {
                    container = document.getElementById(id).getBoundingClientRect();
                }

                //Bind mousedown
                elem.on('mousedown', function(e) {
                    dragged = false;
                    e.preventDefault();
                    startX = e.clientX - elem[0].offsetLeft;
                    startY = e.clientY - elem[0].offsetTop;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                    if (start) start(e, item, elem);
                });

                // Handle drag event
                function mousemove(e) {
                    dragged = true;
                    y = e.clientY - startY;
                    x = e.clientX - startX;
                    setPosition();
                    if (drag) drag(e, item, elem);
                }

                function mouseup(e) {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseup', mouseup);
                    if (stop) stop(e, item, elem, dragged);
                }

                function setPosition() {
                    if (container) {
                        if (x < 0) {
                            x = 0;
                        } else if (x > container.right - width) {
                            x = container.right - width;
                        }
                        if (y < 0) {
                            y = 0;
                        } else if (y > container.height - height) {
                            y = container.height - height;
                        }
                    }

                    elem.css({
                        top: y + 'px',
                        left:  x + 'px'
                    });
                }

            }
        };
    }]);