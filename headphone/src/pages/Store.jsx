import "../style/store.css";
import "../style/interfacebuy.css";
import Text3line from "../components/text3line";
import Storepre from "../components/storepre";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../components/ProductContext";

export default function Store() {
  const { products, setProducts } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);
  const [message, setMessage] = useState("");
  const handldeletproduct = (nameToDelete) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.name !== nameToDelete),
    );
    setMessage("Success: Product delet");
    setClosing(false);
    setShow(true);
    setClosing(false);
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
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [show]);
  return (
    <div className="store">
      <Text3line
        title01={"store"}
        title02={products.length === 0 ? "No Element" : "My purchases"}
        title03={products.length === 0 ? "wait" : ""}
      />
      <div className="storepre"> 
        {products.map((product) => (
          <Storepre
            namehead={product.name}
            color={product.type}
            price={product.price}
            date={product.dateOfAchte}
            img={product.img}
            ondelet={handldeletproduct}
          />
        ))}
      </div>
      {show && (
        <div className={`interfacebuy ${closing ? "hide" : "show"}`}>
          <button
            className={`but ${message == "Success: Product delet" ? "true" : "false"}`}
            onClick={handleClose}
          >
            {message}
          </button>
        </div>
      )}
    </div>
  );
}
