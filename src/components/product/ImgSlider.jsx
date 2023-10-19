import Slider from "react-slick";
import img1 from "../../imgs/products/product_1.png";
import img2 from "../../imgs/products/product_2.png";
import img3 from "../../imgs/products/product_3.png";
import img4 from "../../imgs/products/product_4.png";
import img5 from "../../imgs/products/product_5.png";
import img6 from "../../imgs/products/product_6.png";

const imgs = [img1, img2, img3, img4, img5, img6];

const numArr = [1, 2, 3, 4, 5, 6];
const settings = {
  customPaging: function (i) {
    return <img src={imgs[i]} alt="" className="img-link" />;
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ImgSlider() {
  return (
    <div className="imgslider ">
      <Slider {...settings}>
        {numArr.map((num) => (
          <div key={num}>
            <img src={imgs[num - 1]} alt="" className="imgslider-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
