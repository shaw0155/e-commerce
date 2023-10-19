import Categories from "../components/home/Categories";
import Deal from "../components/home/Deal";
import Features from "../components/home/Features";
import HeaderSlick from "../components/home/HeaderSlick";
import TopProducts from "../components/home/TopProducts";

export default function Home() {
  return (
    <div className="home">
      <HeaderSlick />
      <Categories />
      <Deal />
      <Features />
      <TopProducts />
    </div>
  );
}
