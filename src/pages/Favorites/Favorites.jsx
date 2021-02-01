import React, { useState, useEffect } from "react";

import favoriteIcon from "../../assets/icons/favorites.png";
import searchIcon from "../../assets/icons/search.png";
import { NotificationManager } from "react-notifications";

import Pagination from "@material-ui/lab/Pagination";

import Modal from "../../components/modal";

import ConfirmationModal from "../../popups/ConfirmationModal/ConfirmationModal";

import Languages from "../../platform/services/languages";
import FavoritesController from "../../platform/api/favorites";

import SearchField from "../../components/SearchFIeld/SearchField";
import Loading from "../../components/Loading/Loading";

import Empty from "../../components/Empty/Empty";
import FavoriteMedicine from "./FavoriteItem";

import useStyles from "./Favorites.style.js";
import { Container, Grid } from "@material-ui/core";
import BusyWrapper from "../../components/BusyWrapper/BusyWrapper";
import useGlobal from "../../platform/store";
import NeedToLogin from "../../components/NeedToLogin";
import NothingFound from "../../components/NothingFound";


const {
  modal_actions: { remove_favorite_medicine },
} = Languages.Translations;

const FavoriteMedicines = () => {
  const [{ isAuthenticated }] = useGlobal();
  const [medicines, setMedicines] = useState([]);

  const [removeModal, setRemoveModal] = useState(false);
  const [removableId, setRemovableId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [pageCount, setPageCount] = useState(null);
  const [itemCount, setItemCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasPersonData, setHasPersonData] = useState();

  const [activePage, setActivePage] = useState(1);

  const classes = useStyles();

  const openRemoveModal = (id) => {
    setRemovableId(id);
    setRemoveModal(true);
    // setMedicines({
    //   ...medicines,
    //   [id]: {
    //     ...medicines[id],
    //     isActive: false,
    //   },
    // });
  };

  const closeRemoveModal = () => {
    setRemoveModal(false);
    // setMedicines({
    //   ...medicines,
    //   [removableId]: {
    //     ...medicines[removableId],
    //     isActive: true,
    //   },
    // });
  };

  const getFavoriteMedicines = async () => {
    const body = {
      name: searchTerm,
      paging: {
        count: 8,
        page: activePage,
      },
    };

    if (isAuthenticated) {
      const response = await FavoritesController.GetFavorites(body);

      if (response) {
        setIsLoading(false);
        setMedicines(response.data.data);
        setHasPersonData(response.data.hasPersonalData);
        setItemCount(response.data.itemCount);
        setPageCount(response.data.pageCount);
      }
    }
  };

  useEffect(() => {
    getFavoriteMedicines();
    // getFavoriteMedicines().then((res) => {

    //   const newMed = {};
    //   if (res?.data.length) {
    //     res.data.forEach((i) => {
    //       newMed[i.medicineId] = {
    //         ...i,
    //         isActive: true,
    //       };
    //     });
    //   }
    //   setMedicines(newMed);
    // });
  }, [activePage]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      setIsLoading(true);
      getFavoriteMedicines();
    }
  };

  const handleChange = (event, value) => {
    setActivePage(value);
    window.scrollTo({
      top: 100,
      behavior: "smooth"
    });
  };

  const removeFavMedicine = async () => {
    FavoritesController.RemoveFavMedicine(removableId).then((response) => {
      if (response && response.success) {
        const filteredMedicines = medicines.filter((item) => {
          return item.medicineId !== removableId;
        });
        setRemoveModal(false);
        setMedicines(filteredMedicines);
        getFavoriteMedicines();
      }
    });
  };

  return (
    <>
      {isAuthenticated ? (
        <BusyWrapper isBusy={isLoading}>
          <div className="G-box-wrapper favorites-box pt-100">
            <Container maxWidth="lg">
              <div className="G-box">
                <div className={classes.header}>
                  <h2 className="F-box-title">Favorites</h2>
                  <h2 className={classes.itemLength}>{itemCount} Items</h2>
                </div>
                <SearchField
                      changeHandler={handleSearchChange}
                      searchHandler={handleSearch}
                      searchTerm={searchTerm}
                    />
                {itemCount > 0 ? (
                  <>
                    <div className={classes.favoriteMedicines}>
                      {medicines.map((item) => (
                        
                        <FavoriteMedicine
                          key={item.id}
                          name={item.medicineName}
                          id={item.medicineId}
                          country={item.country}
                          image={item?.medicineImagePath}
                          openRemoveModal={openRemoveModal}
                          closeRemoveModal={closeRemoveModal}
                          isActive={item.isActive}
                        />
                      ))}
                    </div>
                    {itemCount > 8 && (
                      <Pagination
                        style={{ marginTop: "50px" }}
                        count={pageCount}
                        page={activePage}
                        showFirstButton
                        showLastButton
                        onChange={handleChange}
                      />
                    )}
                  </>
                ) : !hasPersonData ? (
                  <Empty
                    name="favorites list"
                    icon={favoriteIcon}
                    link={true}
                  />
                ) : <NothingFound />}
              </div>
            </Container>
          </div>
          <Modal isOpen={removeModal} close={closeRemoveModal}>
            <ConfirmationModal
              cancel={closeRemoveModal}
              confirm={removeFavMedicine}
              description={remove_favorite_medicine}
            />
          </Modal>
        </BusyWrapper>
      ) : (
        <NeedToLogin name="favorite medicines"/>
      )}
    </>
  );
};

export default FavoriteMedicines;
