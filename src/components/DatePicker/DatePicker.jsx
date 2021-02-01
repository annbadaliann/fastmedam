import React, { useState, forwardRef } from "react";

import DateFnsUtils from "@date-io/date-fns";

import TextField from "@material-ui/core/TextField";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  label: {
    marginBottom: "15px",
  },
  root: {
    height: "55px",
    width: "100%",
    border: "1px solid #CECECE",
    paddingLeft: "20px"
  }
}));

const FDatePicker = forwardRef((props, ref) => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const classes = useStyles();


  console.log(selectedDate, 'ref')

  return (
    <div>
      <p className={classes.label}>Date of birth</p>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker 
          value={selectedDate}
          ref={ref}
          format="dd/MM/yyyy"
          onChange={handleDateChange}
          {...props}
          disableFuture={true}
          InputProps={{
            disableUnderline: true,
            classes: {root: classes.root}
           }}
          TextFieldComponent={(inputProps) => (
              <TextField inputRef={ref} fullWidth={true} {...inputProps}/>
          )}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
});

export default FDatePicker;



