import ImgSlider from "../components/product/ImgSlider";
import {
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import Review from "../components/products/Review";
import ReviewList from "../components/products/ReviewList";

const colors = ["orange", "green", "blue", "red"];
const memory = ["128G", "256G", "512G", "1TB"];
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specs = [
  { name: "category", spec: "Mobile" },
  { name: "Manufacturer", spec: "Apple" },
  { name: "Warranty", spec: "12 Months" },
  { name: "Serial number", spec: "358607726380311" },
  { name: "Ships From", spec: "United States" },
];

export default function Product() {
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedmemory, setSelectedmemory] = useState("red");
  const [itemNo, setItemNo] = useState(1);

  const handleColorChange = (event, newColor) => {
    if (newColor !== null) {
      setSelectedColor(newColor);
    }
  };
  const handleMemoryChange = (event, newMemo) => {
    if (newMemo !== null) {
      setSelectedmemory(newMemo);
    }
  };
  const handleItemNoChange = (event) => {
    if (event.target.value !== null) {
      setItemNo(event.target.value);
    }
  };

  return (
    <div className="product-container">
      <div className="product">
        <ImgSlider />
        <div className="product-content">
          <h3>apple iphone</h3>
          <div>
            <Rating name="read-only" value={3} readOnly size="large" />
            <h6>(9911 reviews)</h6>
          </div>
          <div>
            <h3>$83.74</h3>
            <h3>$97.14</h3>
          </div>
          <p>
            Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
            molestiae ut facere aut. Est quidem iusto praesentium excepturi
            harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium
            doloribus eaque debitis.
          </p>
          <h4>color</h4>
          <ToggleButtonGroup
            value={selectedColor}
            exclusive
            onChange={handleColorChange}
            aria-label="choose color"
            className="color-toggle-groups"
          >
            {colors.map((color) => (
              <ToggleButton key={color} value={color} aria-label={color}>
                {selectedColor === color && <CheckIcon />}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <h4>memory</h4>
          <ToggleButtonGroup
            value={selectedmemory}
            exclusive
            aria-label="choose memory"
            onChange={handleMemoryChange}
            className="memo-toggle-groups"
          >
            {memory.map((memo) => (
              <ToggleButton key={memo} value={memo} aria-label={memo}>
                {memo}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <div className="product-content-btns">
            <Select
              labelId="sort"
              id="demo-simple-select"
              value={itemNo}
              onChange={handleItemNoChange}
              defaultValue="1"
            >
              {nums.map((num) => (
                <MenuItem key={num} value={`${num}`}>
                  {num}
                </MenuItem>
              ))}
            </Select>
            <button className="product-content-btn">
              <AddShoppingCartIcon /> add to cart
            </button>
            <Link to="/cart" className="product-content-link">
              buy now
            </Link>
          </div>
        </div>
      </div>
      <div className="product-details">
        <h4>Specifications</h4>
        <div className="product-details-specs">
          {specs.map((spec) => (
            <div key={`${spec.name}#${spec.spec}`}>
              <h5>{spec.name}</h5>
              <h5>{spec.spec}</h5>
            </div>
          ))}
        </div>
        <h4>Description</h4>
        <p>
          Aenean viverra rhoncus pede. Etiam feugiat lorem non metus. Quisque
          malesuada placerat nisl. <br /> Living in today’s metropolitan world
          of cellular phones, mobile computers and other high-tech gadgets is
          not just hectic but very impersonal. We make money and then invest our
          time and effort in making more money..
        </p>
      </div>
      <Review />
      <ReviewList />
    </div>
  );
}
