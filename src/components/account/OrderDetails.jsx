import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function OrderDetails(props) {
  const handleBack = (e) => {
    e.preventDefault();
    props.handleBack();
  };

  return (
    <div className="orderdetails">
      <button onClick={handleBack}>&#8249;</button>
      <h3> order details:</h3>
      <div>
        <h3>Price: ${props.details.totalOrderPrice}</h3>
      </div>

      <div>
        <h4>shipping address: </h4>
        <div className="address-card">
          <h6>
            <LocationOnOutlinedIcon />
            {props.details.shippingAddress.city}
          </h6>
          <h6>
            <HomeOutlinedIcon />
            {props.details.shippingAddress.details}
          </h6>
          <h6>
            <LocalPhoneOutlinedIcon />
            {props.details.shippingAddress.phone}
          </h6>
        </div>
      </div>
      <div>
        <h4>Items </h4>
        <div className="orderdetails-items">
          {props.details.cartItems.map((item) => (
            <div className="orderdetails-item" key={item.id}>
              <h4>{item.count}X</h4>
              <img src={item.product.imageCover} alt="" />
              <div>
                <h5>{item.product.title}</h5>
                <h6>${item.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
