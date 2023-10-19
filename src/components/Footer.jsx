import { Link } from "react-router-dom";
import logo from "../imgs/main/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import googleImg from "../imgs/main/google_play.png";
import appleImg from "../imgs/main/app_store.png";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer-section">
        <img src={logo} alt="" className="logo" />
        <p>
          The starting point for your next project based on easy-to-customize
          Material-UI © helps you build apps faster and better.
        </p>
        <div className="footer-section-downloads">
          <img src={googleImg} alt="" />
          <img src={appleImg} alt="" />
        </div>
      </div>
      <div className="footer-section">
        <h4>Community</h4>
        <ul>
          <li>
            <Link className="footer-section-link" to="">
              Documentation
            </Link>
          </li>
          <li>
            <Link className="footer-section-link" to="">
              Changelog
            </Link>
          </li>
          <li>
            <Link className="footer-section-link" to="">
              Changelog
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Let’s stay in touch</h4>
        <h5>
          Ubscribe to our newsletter to receive latest articles to your inbox
          weekly.
        </h5>
        <div className="footer-section-inputs">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-section">
        <h4>Social</h4>
        <div className="social-links">
          <InstagramIcon className="social-link" />
          <FacebookIcon className="social-link" />
          <TwitterIcon className="social-link" />
        </div>
      </div>
    </footer>
  );
}
