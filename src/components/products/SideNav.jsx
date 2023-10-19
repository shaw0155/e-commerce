import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import categories from "../../data/categories";
import products from "../../data/products";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ToggleButton,
  ToggleButtonGroup,
  Switch,
} from "@mui/material";
import ProductCardHorizontal from "./ProductCardHorizontal";

const textFieldStyle = {
  borderBottom: "none", // Remove the bottom border
};
const brands = ["Apple", "Samsung", "Xaiomi", "Honor"];
const Shippings = ["Fast", "Saving", "Free"];
const ratings = [1, 2, 3, 4];

export default function SideNav() {
  const [accordionOpen, setAccordionOpen] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [tags, setTags] = useState(() => []);

  const handleTags = (event, newTags) => {
    setTags(newTags);
  };

  // Initialize with two elements
  const handleAccordionChange = (index) => {
    // Create a copy of the state array
    const newAccordionState = [...accordionOpen];
    // Toggle the value at the specified index
    newAccordionState[index] = !newAccordionState[index];
    // Set the entire array as the new state
    setAccordionOpen(newAccordionState);
  };

  return (
    <div className="products-sidenav">
      <Accordion
        TransitionProps={{ timeout: 300 }}
        expanded={accordionOpen[0]}
        onChange={() => handleAccordionChange(0)}
      >
        <AccordionSummary
          expandIcon={accordionOpen[0] ? <RemoveIcon /> : <AddIcon />}
        >
          <h4 className="products-sidnav-title">brand</h4>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {brands.map((brand) => (
              <FormControlLabel
                key={brand}
                classes={{ label: "checkbox-label" }}
                control={<Checkbox />}
                label={brand}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ timeout: 300 }}
        expanded={accordionOpen[1]}
        onChange={() => handleAccordionChange(1)}
      >
        <AccordionSummary
          expandIcon={accordionOpen[1] ? <RemoveIcon /> : <AddIcon />}
        >
          <h4 className="products-sidnav-title">Price</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div className="products-sidenav-price">
            <TextField
              id="filled-basic"
              label="$ Min"
              variant="filled"
              InputProps={{
                style: textFieldStyle,
              }}
            />
            <h4> - </h4>
            <TextField
              id="filled-basic"
              label="$ Max"
              variant="filled"
              InputProps={{
                style: textFieldStyle,
              }}
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ timeout: 300 }}
        expanded={accordionOpen[2]}
        onChange={() => handleAccordionChange(2)}
      >
        <AccordionSummary
          expandIcon={accordionOpen[2] ? <RemoveIcon /> : <AddIcon />}
        >
          <h4 className="products-sidnav-title">ratings</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {ratings.map((rate) => (
              <div className="rating-cell" key={rate}>
                <Rating name="read-only" value={rate} readOnly size="large" />{" "}
                <h5>& Up</h5>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ timeout: 300 }}
        expanded={accordionOpen[3]}
        onChange={() => handleAccordionChange(3)}
      >
        <AccordionSummary
          expandIcon={accordionOpen[3] ? <RemoveIcon /> : <AddIcon />}
        >
          <h4 className="products-sidnav-title">brand</h4>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {Shippings.map((brand) => (
              <FormControlLabel
                key={brand}
                classes={{ label: "checkbox-label" }}
                control={<Checkbox />}
                label={brand}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ timeout: 300 }}
        expanded={accordionOpen[4]}
        onChange={() => handleAccordionChange(4)}
      >
        <AccordionSummary
          expandIcon={accordionOpen[4] ? <RemoveIcon /> : <AddIcon />}
        >
          <h4 className="products-sidnav-title">tags</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div className="tags-container">
            <ToggleButtonGroup
              value={tags}
              onChange={handleTags}
              aria-label="categories"
              className="toggle-button-group"
            >
              {categories.map((item) => (
                <ToggleButton key={item.title} value={item.title}>
                  <h6 className="hashtag">{item.title}</h6>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </AccordionDetails>
      </Accordion>
      <FormControlLabel
        className="switch-label"
        control={<Switch defaultChecked />}
        label="In Stock"
      />
      <hr />
      <div className="products-sidenav-topproducts">
        <h4>Top Products</h4>
        {products.slice(3, 6).map((item) => (
          <ProductCardHorizontal
            stylee="horizontal"
            cat={item.category}
            img={item.img}
            key={item.tiltle}
            title={item.tiltle}
            soldNo={item.soldNo}
            priceBefore={item.priceBefore}
            priceAfter={item.priceAfter}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
  );
}
