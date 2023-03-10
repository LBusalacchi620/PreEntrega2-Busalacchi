import styles from "./NavBar.module.css";
import CardWidget from "../CardWidget/CardWidget";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <img
          src="https://res.cloudinary.com/dxf8ebmi7/image/upload/v1677416673/v83ljquhstuhe6zv8zih.png"
          alt="Logo Diarco"
          style={{ width: "10%", objectFit: "cover", height: "5vh" }}
        />

        <ul className={styles.containerList}>
          <li>
            <Button variant="Text">Todas</Button>
          </li>
          <li>
            <Button variant="Text">Bebidas</Button>
          </li>
          <li>
            <Button variant="Text">Lacteos</Button>
          </li>
          <li>
            <Button variant="Text">Alimentos</Button>
          </li>
          <li>
            <Button variant="Text">Congelados</Button>
          </li>
          <li>
            <Button variant="Text">Limpieza</Button>
          </li>
        </ul>
        <CardWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
