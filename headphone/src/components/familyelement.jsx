import Familtbut01 from "./familtbut01";
import { useContext, useState, useEffect } from "react";
import "../style/family.css";
import "../style/interfacebuy.css";
import { ProductContext } from "../components/ProductContext";

export default function Familyelement({ img, text01, text02, more }) {
  const { products, setProducts } = useContext(ProductContext);

  const getTodayFormatted = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddProduct = () => {
    if (!text01 || !text02 || !img) {
      setMessage("Error: All fields are required");
    } else if (products.some((product) => product.name === text01)) {
      setMessage("Error: Product already exists");
    } else {
      const newProduct = {
        name: text01,
        type: "headphone",
        price: text02,
        dateOfAchte: getTodayFormatted(),
        img: img,
      };
      setProducts([...products, newProduct]);
      setMessage("Success: Product added");
    }
    setShow(true);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShow(false);
      setClosing(false);
    }, 100);
  };
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        handleClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div>
      <div className="card">
        <img src={img} />
        <div>{text01}</div>
        <div>{text02}</div>

        <div className="twobut">
          <Familtbut01
            color={"#B7B7B7"}
            value={"add to store"}
            onClicked={handleAddProduct}
          />
          <Familtbut01 color={"#484646"} value={"more info"} onClicked={more} />
        </div>
      </div>

      {show && (
        <div className={`interfacebuy ${closing ? "hide" : "show"}`}>
          <button
            className={`but ${message == "Success: Product added" ? "true" : "false"}`}
            onClick={handleClose}
          >
            {message}
          </button>
        </div>
      )}
    </div>
  );
}
