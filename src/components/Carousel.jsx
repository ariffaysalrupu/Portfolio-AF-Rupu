import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Try out dots and minimising the space between the content

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="border-y-4 border-[#353D3B] max-w-full overflow-hidden p-[3px] bg-transparent">
      <div className="slider-container bg-[#353D3B] text-white font-cormorant-sc text-2xl">
        <Slider {...settings}>
          <div>
            <h3>Website Design</h3>
          </div>
          <div>
            <h3>Front End Development</h3>
          </div>
          <div>
            <h3>User Experience Design</h3>
          </div>
          <div>
            <h3>User Interface Design</h3>
          </div>
          <div>
            <h3>User Research</h3>
          </div>
          <div>
            <h3>Content Management</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
