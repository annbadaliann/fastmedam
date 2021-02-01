import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Modal from "../../../../components/modal";
import AskQuestionModal from "../../../../popups/AskQuestionModal/AskQuestionModal";

import { Container, Grid } from "@material-ui/core";

import searchMedicine from "../../../../assets/icons/01.png";
import findPharmacy from "../../../../assets/icons/02.png";
import prespiction from "../../../../assets/icons/03.png";
import question from "../../../../assets/icons/04.png";

import { to } from "../../../../platform/constants/routes";
import Languages from "../../../../platform/services/languages";

import ServiceItem from "./ServiceItem";

import  useServicesStyles  from "./Services.style.js";

const {
  services: {
    title,
    search_medicine,
    find_pharmacy,
    prescription,
    ask_question,
  },
} = Languages.Translations;

const Services = () => {
  const history = useHistory();

  const classes = useServicesStyles();

  const serviceItems = [
    {
      id: 1,
      route: to.searchMedicine,
      img: searchMedicine,
      title: search_medicine,
      description:
        "Search our database of latestnew, updated and retired or removed products.",
    },
    {
      id: 2,
      route: to.findPharmacy,
      img: findPharmacy,
      title: find_pharmacy,
      description:
        "Find your local Well pharmacy. Enter a town or postcode. Find a pharmacy.",
    },
    {
      id: 3,
      route: to.searchMedicine,
      img: prespiction,
      title: prescription,
      description:
        "Answer your medical questions on prescription drugs, vitamins and Over the Counter medications.",
    },
    {
      route: "",
      id: 4,
      img: question,
      title: ask_question,
      description: "Find medical information, terminology and advice.",
    },
  ];

  const [askQuestionModal, setAskQuestionModal] = useState(false);

  const closeAskQuestionModal = () => setAskQuestionModal(false);

  const handleClick = (item) => {
    const { route } = item;

    if (route) {
      history.push(route);
    } else {
      setAskQuestionModal(true);
    }
  };

  return (
    <>
      <section className={`G-section ${classes.section}`}>
        <Container maxWidth="lg">
          <h2 className="G-title">{title}</h2>
          <div className={classes.serviceItems}>
          {serviceItems.map((item) => (
                <ServiceItem
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  handleClick={() => handleClick(item)}
                />
            ))}
          </div>
           
        </Container>
      </section>
      <Modal isOpen={askQuestionModal} close={closeAskQuestionModal}>
        <AskQuestionModal />
      </Modal>
    </>
  );
};

export default Services;
