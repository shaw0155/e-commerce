import paypal from "../imgs/payments/paypal.png";
import card from "../imgs/payments/card.png";
import visa from "../imgs/payments/visa.png";

const paymentMethods = [
  {
    title: "paypal",
    img: paypal,
    cardNo: "*********1234",
  },
  {
    title: "mastercard",
    img: card,
    cardNo: "*********1234",
  },
  {
    title: "visa",
    img: visa,
    cardNo: "*********1234",
  },
];

export default paymentMethods;
