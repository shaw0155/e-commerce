import Slider from "react-slick";

export default function ImgSlider(props) {
  const settings = {
    customPaging: function (i) {
      return <img src={props.imgs[i]} alt="" className="img-link" />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="imgslider ">
      <Slider {...settings}>
        {props.imgs.map((img) => (
          <div key={props.imgs.indexOf(img)}>
            <img src={img} alt="" className="imgslider-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
