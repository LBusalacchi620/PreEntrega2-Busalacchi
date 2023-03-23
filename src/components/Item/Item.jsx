import React from "react";
import styles from "./Item.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 350,
        backgroundColor: "",
        color: "white",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}
    >
      <CardMedia
        component="img"
        alt="Producto"
        height="140"
        image={element.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="secondary">
          Comprar
        </Button>
      </CardActions>
    </Card>

    //  <div className={styles.container}>
    //     <img src={element.img} alt="" />
    //     <h2>{element.title}</h2>
    //     <h3>{element.description}</h3>
    //     <h2> {element.price}</h2>
    //   </div>
  );
};

export default Item;
