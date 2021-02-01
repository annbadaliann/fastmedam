import React, { useState, useEffect } from "react";

import Instruction from "./Tabs/Instruction";
import Pharmacies from "./Tabs/Pharmacies";
import Analogues from "./Tabs/Analogues";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import minus from "../../assets/icons/minus.png";
import plus from "../../assets/icons/plus.png";
import EmptyImg from "../../assets/images/empty-img.png";

import MedicineController from "../../platform/api/searchMedicine";
import medicineImg from "../../assets/images/medicine.jpg";
import useStyles from "./MedicineDetails.style";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { to } from "../../platform/constants/routes";
import { Box, Container, Typography } from "@material-ui/core";
import FTabs from "./Tabs/Tabs";
import SearchMedicineController from "../../platform/api/searchMedicine";

const MedicineDetails = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(2);
  const [medicine, setMedicine] = useState(null);

  const history = useHistory();

  const classes = useStyles();

  const addToCart = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const id = 90;
    const response = await MedicineController.GetMedicineDetails(id);
  };

  const getMedicineDetails = async () => {
    const id = props.match.params.id;

    const result = await SearchMedicineController.GetMedicineDetails(id);

    if (result && result.success) {
      setMedicine(result.data);
    }
  };

  const change = (e) => setQuantity(e.target.value);

  const increment = () => {
    setQuantity(Math.min(quantity + 1, 60));
  };

  const decrement = () => {
    setQuantity(Math.max(quantity - 1, 0));
  };

  useEffect(() => {
    getMedicineDetails();
  }, {});

  const formatDate = (date) => {
    if (date) {
      const monthNames = [
        "January ",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const localDate = new Date(date);
      return `${localDate.getDate()} ${
        monthNames[localDate.getMonth()]
      } ${localDate.getFullYear()}`;
    }
    return "";
  };

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div className="G-box-wrapper pt-100">
      <Container maxWidth="lg">
        <div className={`G-box ${classes.medicineDetailsBox}`}>
          {medicine && (
            <>
            <div className={classes.content}>
              <Box display="flex" alignItems="center" className={classes.path}>
                <div className={classes.back}>
                  <Link onClick={handleGoBack}>
                    <ArrowBackIosIcon />
                    <p>Back</p>
                  </Link>
                  <span className={classes.divider} />
                </div>
                <Breadcrumbs className={classes.breadcrumbs}>
                  <Link to={to.home}>Home</Link>
                  <Link to={to.searchMedicine}>Product search</Link>
                  <p>Paracetamol 500</p>
                </Breadcrumbs>
              </Box>

              <div className={classes.infoWrapper}>
                <div className={classes.left}>
                  <div className={classes.photo}>
                    <img
                      src={medicine.photo.length ? medicine.photo[0] : EmptyImg}
                      alt="medicine"
                    />
                  </div>
                </div>
                <div className={classes.info}>
                  <h3>{medicine.name}</h3>
                  <ul className={classes.infoList}>
                    {medicine.company && <li>Company: {medicine.company}</li>}
                    {medicine.manufactur && (
                      <li>Manufactur: {medicine.manufactur}</li>
                    )}
                    {medicine.activeIngredient && (
                      <li>ActiveIngredient: {medicine.activeIngredient}</li>
                    )}
                    {medicine.expireDate && (
                      <li>Expire date: {formatDate(medicine.expireDate)}</li>
                    )}
                  </ul>
                </div>
                <div className={classes.right}>
                  <div className={classes.quantity}>
                    <img src={minus} alt="minus" onClick={decrement} />
                    <input
                      type="number"
                      value={quantity}
                      min="0"
                      onChange={change}
                    />
                    <img src={plus} alt="plus" onClick={increment} />
                  </div>
                  <h3 className={classes.price}>
                    {medicine.price * quantity} dr
                  </h3>
                  <button className="G-button" onClick={addToCart}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>


          <FTabs description={medicine.description} pharmacies={medicine?.pharmacies} locations={medicine.locations} />

          </>)}
        </div>

      </Container>
    </div>
  );
};

export default MedicineDetails;
