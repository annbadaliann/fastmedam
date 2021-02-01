import React from "react";
import searchIcon from "../../assets/icons/search.png";
import useStyles from "./SearchField.style.js";

const SearchField = ({
  placeholder,
  changeHandler,
  searchTerm,
  searchHandler,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <label>
        <input
          type="text"
          autoComplete="on"
          value={searchTerm}
          onChange={changeHandler}
          placeholder={placeholder}
          className={classes.input}
        />
        <div onClick={searchHandler} className={classes.searchIconWrapper}>
          <img src={searchIcon} alt="search" className={classes.searchIcon} />
        </div>
      </label>
    </div>
  );
};

export default SearchField;
