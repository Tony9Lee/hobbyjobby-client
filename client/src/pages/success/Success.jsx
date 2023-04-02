import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Success = () => {
  const { search } = useLocation(); // To represent the current URL of the page and desstructuring to extract search property form the returned object
  const navigate = useNavigate(); //To be redirected after order is updated using useNavigate hook
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (error) {}
    };
    makeRequest();
  }, []);

  return (
    <div>
      Payment successful. Please do not close this page as you are being
      redirected to your order.
    </div>
  );
};

export default Success;
