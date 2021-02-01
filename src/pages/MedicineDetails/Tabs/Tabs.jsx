import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "./TabsContent.style";
import Instruction from "./Instruction";
import Pharmacies from "./Pharmacies";
import Analogues from "./Analogues";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FTabs({description, pharmacies, locations}) {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "Instruction", id: 0 },
    { label: "Pharmacies", id: 1 },
    // { label: "Analogues", id: 2 },
  ];

  return (
    <div className={classes.tabs}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        classes={{
          indicator: classes.indicator
        }}>
        {tabs.map((tab) => (
          <Tab
            id={tab.id}
            label={tab.label}
            {...a11yProps(tab.id)}
            className={classes.tab}
          />
        ))}
      </Tabs>
      <TabPanel value={value} index={0}>
        {<Instruction description={description}/>}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {<Pharmacies pharmacies={pharmacies} locations={locations}/>}
      </TabPanel>
    </div>
  );
}
