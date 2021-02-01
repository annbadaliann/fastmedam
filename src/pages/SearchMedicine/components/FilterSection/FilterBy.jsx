import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useEffect } from "react";
import { useCheckboxStyles } from "../../SearchMedicine.style";

export default function CheckboxesGroup() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);

  const classes = useCheckboxStyles();

  const getCountriesAndCompanies = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        "http://37.252.74.122:81/api/Medicine/GetCountriesAndCompanies",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json-patch+json",
            "Accept-Language": "*",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const result = await response.json();

      if (result && result.success) {
        const countries = result.data.countries.slice(0, 5);
        const companies = result.data.companies.slice(0, 5);
        setCountries(countries);
        setCompanies(companies);
      }

    } catch (error) {
    }
  };

  useEffect(() => {
    getCountriesAndCompanies();
  }, []);

  const handleChange = (item) => {
    const newCountries = countries;

    newCountries?.forEach((country) => {
        if (country.id === item.id) {
            const copy = country;
            copy.checked = !copy.checked;
        }
    });

    setCountries(newCountries);

    // handlePushSelectedNotifications(item.id);
};


  return (
    <>
      <div className={classes.formBox}>
      <h3 className={classes.checkboxTitle}>Country</h3>
      <FormGroup>
        {["Armenia", "Russia", "France", "Greece"].map((country) => {
          return (
            <FormControlLabel
              className={classes.checkboxLabel}
              control={
                <Checkbox
                  checked={country ? true : false}
                  onChange={handleChange}
                  name={country}
                  classes={{
                    root: classes.root,
                    checked: classes.checked,
                    colorSecondary: classes.colorSecondary,
                  }}
                />
              }
              label={country}
            />
          );
        })}
      </FormGroup>
      </div>

      <div className={classes.formBox}>
        <h3 className={classes.checkboxTitle}>Company</h3>
        <FormGroup>
          {["Volo", "Digitain", "Synergy", "Render forest"].map((company) => {
            return (
              <FormControlLabel
                key={company}
                className={classes.checkboxLabel}
                control={
                  <Checkbox
                    disableRipple={true}
                    checked={company ? false : true}
                    onChange={() => handleChange(item)}
                    name={company}
                    classes={{
                      root: classes.root,
                      checked: classes.checked,
                      colorSecondary: classes.colorSecondary,
                    }}
                  />
                }
                label={company}
              />
            );
          })}
        </FormGroup>
      </div>
    </>
  );
}
