import Slider from "react-slick";

const SComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider">
        <img className="slider-img" src="./slide1.png" alt="" />
      </div>
      <div>
        <img className="slider-img" src="./slide2.png" alt="" />
      </div>
      <div>
        <img className="slider-img" src="./slide3.jpg" alt="" />
      </div>
      <div>
        <img className="slider-img" src="./slide4.png" alt="" />
      </div>
    </Slider>
  );
};

export default SComponent;
