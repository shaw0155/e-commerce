import Slider from "react-slick";
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
  arrows: false,
};

//const items = products.slice(0, 4);

export default function HeaderSlick(props) {
  return (
    <div className="home-header ">
      <Slider {...settings}>
        {props.products.map((item) => (
          <SlickCard
            key={item.id}
            title={item.title}
            img={item.imageCover}
            description={item.description}
          />
        ))}
      </Slider>
    </div>
  );
}
