import "../style/store.css";
import Text3line from "../components/text3line";
import Storepre from "../components/storepre";
import { useContext } from "react";
import { ProductContext } from "../components/ProductContext";

export default function Store() {
  const { products } = useContext(ProductContext);
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
          />
        ))}
      </div>
    </div>
  );
}
