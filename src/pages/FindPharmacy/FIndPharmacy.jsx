import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import Pharmacies from "../MedicineDetails/Tabs/Pharmacies";

function FindPharmacy() {
  const [pharmacies, setPharmacies] = useState([]);

  const getPharmacies = () => {};

  useEffect(() => {
      getPharmacies();
  }, [])

  return (
    <div className="G-box-wrapper pt-100">
      <Container maxWidth="lg">
        <Pharmacies />
      </Container>
    </div>
  );
}

export default FindPharmacy;
