import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import products from "../../data/products";
import ProductCardHorizontal from "./ProductCardHorizontal";

export default function ProductList() {
  const [alignment, setAlignment] = useState(true);
  const [sort, setSort] = useState("popular");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className="products-productlist">
      <div className="products-productlist-header">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value={true} aria-label="list">
            <BallotOutlinedIcon className="products-productlist-header-icon" />
          </ToggleButton>
          <ToggleButton value={false} aria-label="grid">
            <GridViewOutlinedIcon className="products-productlist-header-icon" />
          </ToggleButton>
        </ToggleButtonGroup>

        <Select
          labelId="sort"
          id="demo-simple-select"
          value={sort}
          onChange={handleSort}
          defaultValue="popular"
        >
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
          <MenuItem value="popular">Popular</MenuItem>
        </Select>
      </div>
      <div
        className={
          alignment
            ? "product-productlist-product-cards-list"
            : "product-productlist-product-cards-grid"
        }
      >
        {products.map((item) => (
          <ProductCardHorizontal
            stylee={alignment ? "horizontal" : "vertical"}
            key={item.tiltle}
            cat={item.category}
            img={item.img}
            title={item.tiltle}
            soldNo={item.soldNo}
            rate={item.rate}
            priceBefore={item.priceBefore}
            priceAfter={item.priceAfter}
            P={
              alignment
                ? " Qui sunt deserunt dol. repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et."
                : null
            }
          />
        ))}
      </div>
    </div>
  );
}
