import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <ItemListContainer nombre={"Luciano"} />
    </div>
  );
};

export default Footer;
