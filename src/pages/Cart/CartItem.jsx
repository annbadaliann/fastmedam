import React from "react";

import { TableCell } from "@material-ui/core";

import minus from "../../assets/icons/minus.png";
import plus from "../../assets/icons/plus.png";
import medicineImg from "../../assets/images/medicine.jpg";

import useStyles from "./Cart.style";

const CartItem = ({ medicine, increment, decrement, onRemove }) => {
  const { name, country, price, quantity, img, id } = medicine;

  const classes = useStyles();

  const handleIncrementClick = () => {
    increment(id);
  };

  const handleDecrementClick = () => {
    decrement(id);
  };

  const handleRemoveClick = () => {
    onRemove(id);
  }

  return (
    <>
      <TableCell>
        <div className={classes.productName}>
          <div className={classes.productImage}>
            <img src={img ? img : medicineImg} alt="medicine" />
          </div>

          <div className={classes.productInfo}>
            <h3>{name}</h3>
            <span>{country}</span>
          </div>
        </div>
        <span className={classes.remove} onClick={handleRemoveClick}>
          Remove
        </span>
      </TableCell>
      <TableCell className={classes.num}>{price}</TableCell>
      <TableCell>
        <div className={classes.quantity}>
          <img src={minus} alt="minus" onClick={handleDecrementClick} />

          <input type="number" value={quantity} min="0" />
          <img src={plus} alt="plus" onClick={handleIncrementClick} />
        </div>
      </TableCell>
      <TableCell className={classes.num}>{price * quantity} dr</TableCell>
    </>
  );
};

export default CartItem;
