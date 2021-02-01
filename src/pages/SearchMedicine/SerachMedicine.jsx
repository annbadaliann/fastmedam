import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";

import { useLocation, useHistory } from "react-router-dom";

import SearchMedicineController from "../../platform/api/searchMedicine";
import MedicineItem from "./components/MedicineItem/MedicineItem";
import { Container, Grid } from "@material-ui/core";

import SearchField from "../../components/SearchFIeld/SearchField";
import medicineImg from "../../assets/images/medicine.jpg";
import { useStyles } from "./SearchMedicine.style";
import Empty from "../../components/Empty/Empty";
import FavoritesController from "../../platform/api/favorites";
import NotesController from "../../platform/api/notes";

import BusyWrapper from '../../components/BusyWrapper/BusyWrapper';

const SearchMedicine = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const search = params.get("search");

  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState(search);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const [itemCount, setItemCount] = useState(null);
  const [searchValue, setSearchValue] = useState(search)

  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({
      top: 100,
      behavior: "smooth"
    });
  };

  const getMedicines = async () => {
    const body = {
      search: searchTerm,
      country: "",
      company: "",
      paging: {
        count: 5,
        page: page,
      },
    };

    const result = await SearchMedicineController.SearchMedicineWeb(body);

    if(result) {
      setIsLoading(false);
      if(result.data){
        setMedicines(result.data?.data);
      }
      setPageCount(result.data.pageCount);
      setItemCount(result.data.itemCount);
    }
    
  };

  useEffect(() => {
    getMedicines();
  }, [page]);

  const sendToNotes = async (medicine) => {
    const body = {
      medicineId: medicine.id,
      note: "",
    };

    if(!medicine.noteActive){
    const response = await NotesController.AddNoteMedicine(body);

    if (response && response.success) {
      const newMedicines = medicines.map(item => {
        if(item.id === medicine.id){
          return {
            ...item,
            noteActive: true
          }
        }
        return item;
      })
  
      setMedicines(newMedicines);
    }
  }
  };

  const sendToFavorite = async (medicine) => {

    console.log(medicine)
    if(!medicine.favoriteActive){
      const response = await FavoritesController.AddFavMedicine(medicine.id);

      if (response && response.success) {
        const newMedicines = medicines.map(item => {
          if(item.id === medicine.id){
            return {
              ...item,
              favoriteActive: true
            }
          }
          return item;
        })
    
        setMedicines(newMedicines);
      }
    
  }
  };

  const searchMedicine = () => {
    // if (searchTerm) {
      getMedicines();
      setSearchValue(searchTerm);
    // }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // setSearchTerm(value.split(" ").join(""))
    setSearchTerm(value);
  }

  return (
    <BusyWrapper isBusy={isLoading}>
    <section className={`${classes.section} pt-100`}>
      <Container maxWidth="lg">
        <SearchField
          searchHandler={searchMedicine}
          changeHandler={handleInputChange}
          searchTerm={searchTerm}
        />
        <div className={classes.content}>
          <Grid container spacing={2}>
            <div className={classes.listSection}>
              {itemCount > 0 ? medicines?.map((medicine) => (
                <MedicineItem
                  medicine={medicine}
                  key={medicine.id}
                  id={medicine.id}
                  sendToFavorite={sendToFavorite}
                  sendToNotes={sendToNotes}
                  medicines={medicines}
                />
              )) : <p>Nothing found.</p>}
              
              {itemCount >= 5 && (
                <Pagination
                  count={pageCount}
                  page={page}
                  showFirstButton
                  showLastButton
                  onChange={handleChange}
                  className={classes.pagination}
                />
              )}
            </div>
          </Grid>
        </div>
      </Container>
    </section>
    </BusyWrapper>
  );
};

export default SearchMedicine;
