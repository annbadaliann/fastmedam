import React, { useState } from "react";

import Box from "@material-ui/core/Box";

import Select from "../../../../Select/Select";

import { useSelectCityStyles } from "../Navbar.style";

const SelectCity = () => {
  const [city, setCity] = useState(null);

  const cityOptions = [
    {
      name: "Yerevan",
      value: 1,
    },
    {
      name: "Dilijan",
      value: 2,
    },
    {
      name: "Stepanavan",
      value: 3,
    },
    {
      name: "Abovyan",
      value: 4,
    },
    {
      name: "Jermuk",
      value: 5,
    },
    {
      name: "Eghvard",
      value: 6,
    },
    {
      name: "Vanadzor",
      value: 7,
    },
    {
      name: "Tsaghkadzor",
      value: 8,
    },
    {
      name: "Ararat",
      value: 9,
    },
    {
      name: "Gyumri",
      value: 10,
    },
    {
      name: "Martuni",
      value: 11,
    },
    {
      name: "Armavir",
      value: 12,
    },
  ];

  const classes = useSelectCityStyles();

  const changeCity = (city) => {
    setCity(city.value);
  };

  const getCityList = () => {
    // TODO network call

     // const response = LanguageController.ChangeLanguage(shortCode);

     // const { success, data } = response;

    // if(response && success) {
    //    setSelectedLang(data)
    // }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.selectCity}
    >
      <i className="icon-ic_location" />
      <Select
        useValue
        options={cityOptions}
        onChange={changeCity}
        placeholder={<span>Yerevan</span>}
        name="Choose your city"
        value={city}
      />
    </Box>
  );
};

export default SelectCity;
