(function ($) {
    $(document).ready(function () {
        if ($.isFunction($.fn.lightSlider)) {
            $('#itemfiles, .item-with-metadata .lightgallery').lightSlider({
                item: 1,
                slideMove: 1,
                mode: 'fade',
                speed: 600,
                controls: true,
                adaptiveHeight: false,
                gallery: false,
                prevHtml: '<img src="/themes/patrimoniouja/asset/img/left.png" title="Anterior">',
                nextHtml: '<img src="/themes/patrimoniouja/asset/img/right.png" title="Siguiente">',
                loop: false,
                keyPress: true,
                slideMargin: 0,
                enableDrag: true,
                onSliderLoad: function (visor) {
                    visor.lightGallery({
                        selector: '#itemfiles .media, .item-with-metadata .lightgallery .media',
                        download: true,
                        zoom: true,
                        flipVertical: false,
                        rotateLeft: false,
                        googlePlus: false,
                        youtubePlayerParams: {
                            modestbranding: 1,
                            showinfo: 0,
                            rel: 0,
                            controls: 1
                        },
                        vimeoPlayerParams: {
                            byline: 0,
                            portrait: 0,
                            color: 'A90707'
                        },
                    });
                },
            });
        }
    });
})(jQuery)