import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import "./Style/OrderSuccess.css";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-wrapper">
      <div className="success-card">
        <CheckCircleIcon className="success-icon" />

        <h1>Order Confirmed</h1>
        <p>
          Thank you for your order! <br />
          A confirmation email has been sent to you.
        </p>

        <button
          className="success-btn"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
