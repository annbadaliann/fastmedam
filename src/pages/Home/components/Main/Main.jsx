import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Box, Container } from "@material-ui/core";

import { to } from "../../../../platform/constants/routes";
import Languages from "../../../../platform/services/languages";

import SearchField from "../../../../components/SearchFIeld/SearchField";

import Logo from "../../../../assets/images/logo.png";

import useStyles from "./Main.style.js";

const {
  search_for_medicine_or_product,
  medicine_name,
} = Languages.Translations;

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const classes = useStyles();

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const moveToSearch = () => {
    history.push({
      pathname: to.searchMedicine,
      search: `?search=${searchTerm}`,
    });
  };

  return (
    <main className={classes.main}>
      <Container maxWidth="lg">
        <Box className={classes.header}>
          <Box className={classes.logo}>
            <Link to={to.home}>
              <img src={Logo} alt="Logo" />
            </Link>
          </Box>
        </Box>
        <Box className={classes.content}>
          <h1 className={classes.title}>Fast medicine delivery</h1>
          <p className={classes.description}>
            {search_for_medicine_or_product}
          </p>
          <Box className={classes.searchMedicineField}>
            <SearchField
              placeholder={medicine_name}
              changeHandler={changeHandler}
              searchTerm={searchTerm}
              searchHandler={moveToSearch}
              name="Search"
            />
          </Box>
        </Box>
      </Container>
    </main>
  );
}

export default Main;
