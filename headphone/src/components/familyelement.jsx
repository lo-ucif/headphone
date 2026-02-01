import Familtbut01 from "./familtbut01";
import { useContext, useState, useEffect } from "react";
import "../style/interfacebuy.css";
import { ProductContext } from "../components/ProductContext";
import Text3line from "../components/text3line";

export default function Familyelement({ img, text01, text02, more }) {
  const stylecadre = {
    width: "360px",
    height: "392px",
    borderRadius: "30px",
    background: "#FFF",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    alignItems: "center",
  };

  const styleimg = {
    width: "260px",
    height: "260px",
  };

  const styletxt01 = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Itim",
    fontSize: "20px",
    fontWeight: 400,
  };

  const twobut = {
    display: "inline-flex",
    height: "62px",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  };

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
      setMessage("Can't add product");
    } else {
      setMessage("Product added successfully");
      const newProduct = {
        name: text01,
        type: "headphone",
        price: text02,
        dateOfAchte: getTodayFormatted(),
        img: img,
      };
      setProducts([...products, newProduct]);
    }
    setShow(true);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShow(false);
      setClosing(false);
    }, 600);
  };
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        handleClose();
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [show]);

  return (
    <div style={stylecadre}>
      <img style={styleimg} src={img} />
      <div style={styletxt01}>{text01}</div>
      <div style={styletxt01}>{text02}</div>

      <div style={twobut}>
        <Familtbut01
          color={"#B7B7B7"}
          value={"add to store"}
          onClicked={handleAddProduct}
        />
        <Familtbut01 color={"#484646"} value={"more info"} onClicked={more} />
      </div>

      {show && (
        <div className={`interfacebuy ${closing ? "hide" : "show"}`}>
          <Text3line title01="Message" />
          <div className="text">{message}</div>
          <div className="twobut">
            <button className="but" onClick={handleClose}>
              ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
