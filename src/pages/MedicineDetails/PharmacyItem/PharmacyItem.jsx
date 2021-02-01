import React, { useState } from "react";
import EmptyImg from "../../../assets/images/empty-img.png";
import useStyles from "./PharmacyItem.style";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";

const PharmacyItem = ({ pharmacy }) => {
  const [pharmacyDetails, setPharmacyDetails] = useState(false);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  const handlePharmacyChange = (event) => {
    setSelectedPharmacy(event.target.value);
  };

  const togglePharmacy = () => {
    setPharmacyDetails(!pharmacyDetails);
  };

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <Accordion onChange={handleChange("panel1")} className={classes.accordion}>
      <AccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header"
        classes={{
          root: classes.accordion,
          content: classes.accordionContent,
          expanded: classes.accordionContent,
        }}
      >
        <div
          className={classes.pharmacy}
          key={pharmacy.id}
          onClick={togglePharmacy}
        >
          <div className={classes.left}>
            <div className={classes.photo}>
              <img
                src={pharmacy.photo ? pharmacy.photo : EmptyImg}
                alt="logo"
              />
            </div>
            <h3 className={classes.name}>{pharmacy.name}</h3>
          </div>
          <h3 className="price">{pharmacy.price} dr</h3>
        </div>
      </AccordionSummary>

      <AccordionDetails classes={{ root: classes.accordionDetails }}>
        {pharmacy.addresses.map((item) => {
          return (
            <div className={classes.detailItem}>
              <div>
                <RadioGroup
                  aria-label="pharmacies"
                  name="pharmacies"
                  value={selectedPharmacy}
                  onChange={handlePharmacyChange}
                >
                  <FormControlLabel
                    value={item.address}
                    control={
                      <Radio
                        classes={{
                          root: classes.root,
                          checked: classes.checked,
                        }}
                      />
                    }
                    label={item.address}
                  />
                </RadioGroup>
                <span className={classes.workingHours}>
                  Working hours:{" "}
                  {item.isNoctidial
                    ? "24 hours"
                    : `${item.workingHourFrom} - ${item.workingHourTo}`}
                </span>
              </div>
              <a href={`tel:${item.phone}`} className={classes.phone}>
                {item.phone}
              </a>
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default PharmacyItem;
