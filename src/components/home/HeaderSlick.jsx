import Slider from "react-slick";
import products from "../../data/products";
import SlickCard from "./SlickCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
};

const items = products.slice(0, 4);

export default function HeaderSlick() {
  return (
    <div className="home-header ">
      <Slider {...settings}>
        {items.map((item) => (
          <SlickCard key={item.offer} title={item.offer} img={item.img} />
        ))}
      </Slider>
    </div>
  );
}
