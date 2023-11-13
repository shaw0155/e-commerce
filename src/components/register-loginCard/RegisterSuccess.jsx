import { Link } from "react-router-dom";

export default function RegisterSuccess() {
  return (
    <div className="oredercompleted">
      <div className="oredercompleted-icon">🎉</div>
      <h1>Register Success!</h1>
      <p>your account has been created.</p>
      <Link to="/login" className="oredercompleted-link">
        continue
      </Link>
    </div>
  );
}
