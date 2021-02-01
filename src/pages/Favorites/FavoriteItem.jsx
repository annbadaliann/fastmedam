import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import EmptyImg from "../../assets/images/empty-img.png";
import favoriteActive from "../../assets/icons/ic_favorite.png";
import favoriteInactive from "../../assets/icons/ic_nofavorite.png";

import useStyles from "./Favorites.style";

const FavoriteMedicine = ({ name, image, id, country, openRemoveModal }) => {
  const history = useHistory();

  const classes = useStyles();

  const handleOpenRemoveModal = (event) => {
    event.stopPropagation();
    openRemoveModal(id);
  };


  const moveToDetails = () => {
    history.push(`/medicine-details/${id}`);
  };

  console.log(image, 'image')

  return (
    <>
      <div className={classes.favoriteMedicine} onClick={moveToDetails}>
        <div className={classes.isFavIcon}>
          <img src={favoriteActive} alt="favorite" onClick={handleOpenRemoveModal} title="click to remove this medicine from your favorite medicines list" />
        </div>
        <div className={classes.content}>
          <div className={classes.medicineImage}>
            <img src={EmptyImg} alt="medicine" />
          </div>
          <div className="G-info">
            <h3>{name}</h3>
            <span>{country}</span>
          </div>
        </div>
      </div>
    </>
  );
};



export default FavoriteMedicine;
