import React from "react";
import { Link, useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

import EmptyImg from "../../../../assets/images/empty-img.png";
import noteIcInactive from "../../../../assets/icons/notes.png";
import noteIcActive from "../../../../assets/icons/notes 2.png";
import favIcInactive from "../../../../assets/icons/favorites.png";
import favIcActive from "../../../../assets/icons/favorites 2.png";

import { useStyles } from "../../SearchMedicine.style";

const MedicineItem = ({
  medicine,
  sendToNotes,
  sendToFavorite,
  isFavorite,
}) => {
  const { id, name, price, ratio, photo, activeIngredient, favoriteActive, noteActive } = medicine;

  const history = useHistory();

  const classes = useStyles();

  const handleFavoritesClick = (event) => {
    event.stopPropagation();
      sendToFavorite(medicine);
  };

  const handleNotesClick = (event) => {
    event.stopPropagation();
    sendToNotes(medicine);
  };

  const moveToDetails = (event) => {
    event.stopPropagation();
    history.push(`/medicine-details/${id}`);
  };

  const moveToStore = () => {
    history.push("/store");
  };

  const icons = [
    {
      icon: favoriteActive ? favIcActive : favIcInactive,
      name: "send to favorites",
      handleClick: handleFavoritesClick,
      activeClassName: favoriteActive ? true : false,
    },
    {
      icon: noteActive ? noteIcActive : noteIcInactive,
      name: "send to notes",
      handleClick: handleNotesClick,
      activeClassName: noteActive ? true : false,
    },
  ];

  return (
    <div className={classes.medicine} onClick={moveToDetails}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img src={photo ? photo : EmptyImg} alt="medicine" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div className={classes.info}>
                <div className={classes.titleWrapper}>
                  <h3>{name} </h3>
                  <div className={classes.icons}>
                    {icons.map((item) => (
                      <div
                        className={`${classes.icon} ${
                          item.activeClassName && classes.activeIcon
                        }`}
                        onClick={item.handleClick}
                        key={item.name}
                      >
                        <img src={item.icon} alt={item.name} />
                      </div>
                    ))}
                  </div>
                </div>
                <span>Ratio: {ratio}</span>
                <span>Active substance: {activeIngredient}</span>
              </div>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Grid item>
            <div className={classes.priceAndMore}>
              <p className={classes.price}>
                <span style={{ fontSize: "24px", color: "#000000" }}>from</span>{" "}
                {price} dr
              </p>
              <Link to={`/medicine-details/${id}`}>
                <button
                  className={`G-button ${classes.button}`}
                  onClick={moveToStore}
                >
                  Find at a store
                </button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MedicineItem;
