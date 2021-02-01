import React from "react";

import medicineImg from "../../assets/images/medicine.jpg";
import garbage from "../../assets/icons/garbage.png";
import edit from "../../assets/icons/edit.png";
import useStyles from "./Notes.style";
import { TableCell } from "@material-ui/core";

const NoteItem = ({ medicine, openRemoveModal, openEditModal }) => {
  const { name, img, note, country, medicineId: id } = medicine;

  const classes = useStyles();

  const handleEditClick = (event) => {
    openEditModal(event, medicine);
  };

  const removeItemHandler = (event) => {
    openRemoveModal(event,id);
  };

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
      </TableCell>
      <TableCell>{note}</TableCell>

      <TableCell>
        <img src={edit} alt="edit" className={classes.deleteIcon} onClick={handleEditClick}/>
        <img src={garbage} alt="delete" className={classes.deleteIcon} onClick={removeItemHandler} style={{marginLeft: "10px"}}/>
      </TableCell>
    </>
  );
};

export default NoteItem;
