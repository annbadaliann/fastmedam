import React, { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";

import useGlobal from "../../../../../platform/store";

import { useSelectLanguageStyles } from "../Navbar.style";

const SelectLanguage = () => {
  const [languages, setLanguages] = useState([]);
  const [{ language }] = useGlobal();

  const [{}, { getLanguages, updateLanguage }] = useGlobal();

  const classes = useSelectLanguageStyles();

  const getLanguagesData = async () => {
    getLanguages().then((response) => {
      if (response && response.success) {
        setLanguages(response.data);
      }
    });
  };

  useEffect(() => {
    getLanguagesData();
  }, []);

  const changeLanguage = async (shortCode) => {
    updateLanguage(shortCode);

    // const { success, data } = response;

    // if(response && success) {
    //    setSelectedLang(data)
    // }
  };

  return (
    <>
      {languages.length ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={classes.languages}
        >
          {languages.map((item) => (
            <span
              key={item.id}
              className={
                language === item.shortCode
                  ? classes.selectedLanguage
                  : "undefined"
              }
              onClick={() => changeLanguage(item.shortCode)}
            >
              {item.shortCode}
            </span>
          ))}
        </Box>
      ) : null}
    </>
  );
};

export default SelectLanguage;
