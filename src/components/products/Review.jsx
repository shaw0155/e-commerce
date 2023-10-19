import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { Rating } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const rates = [
  { star: 5, rates: 60, no: "5.21k" },
  { star: 4, rates: 30, no: "4.8k" },
  { star: 3, rates: 13, no: "523" },
  { star: 2, rates: 5, no: "455" },
  { star: 1, rates: 2, no: "80" },
];
export default function Review() {
  return (
    <div className="product-review">
      <div className="product-review-content">
        <h3>Review</h3>
        <div>
          <h2>4.1</h2>
          <Rating name="read-only" value={4.1} readOnly size="large" />
          <br />
          <h6>123.46k reviews</h6>
        </div>
        <button>
          <DriveFileRenameOutlineOutlinedIcon /> write a review
        </button>
      </div>
      <div className="product-review-reviews">
        {rates.map((rate) => (
          <Stack key={rate.no} spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <h5>{rate.star}</h5>
            <StarBorderIcon />
            <Slider aria-label="review" value={rate.rates} disabled />
            <h5>{rate.no}</h5>
          </Stack>
        ))}
      </div>
    </div>
  );
}
