
export const adaptiveSlider = function (countrySliderInit) {
    
    function repayPhotos() {
        $('.slick-arrow').click(function () {
            $('.photos_content').css({'opacity' : .25})
        });
    }
    
    const sliderMediaQueryTablet = window.matchMedia('(max-width: 1023px)');
    const sliderMediaQueryMobile_L = window.matchMedia('(max-width: 900px)');
    const sliderMediaQueryMobile_M = window.matchMedia('(max-width: 690px)');
    const sliderMediaQueryMobile_S = window.matchMedia('(max-width: 470px)');

    const studioPhotos = document.querySelector('.studio_photos_albums'); // for pages 'studio_fotos' & 'school-fotos'

    if (sliderMediaQueryTablet.matches || studioPhotos) {
        if (sliderMediaQueryMobile_L.matches) {
            if (sliderMediaQueryMobile_M.matches) {
                if (sliderMediaQueryMobile_S.matches) {
                    $(countrySliderInit).slick({
                        infinite: true,
                        speed: 800,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    });
                    repayPhotos();
                    return;
                }
                $(countrySliderInit).slick({
                    infinite: true,
                    speed: 800,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                });
                repayPhotos();
                return;
            }
            $(countrySliderInit).slick({
                infinite: true,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 3,
            });
            repayPhotos();
            return;
        }
        $(countrySliderInit).slick({
            infinite: true,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 4,
        });
        repayPhotos();
    }
};
