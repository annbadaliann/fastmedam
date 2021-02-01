import React, { useEffect, useState } from "react";

import { Container, Table, TableHead, TableBody, TableContainer, TableCell, TableRow } from '@material-ui/core';
import Pagination from "@material-ui/lab/Pagination";

import ConfirmationModal from "../../popups/ConfirmationModal/ConfirmationModal";

import Modal from "../../components/modal";
import Empty from "../../components/Empty/Empty";

import cartIcon from "../../assets/icons/cart.png";

import useStyles from "./Cart.style";
import CartItem from "./CartItem";
import SearchField from "../../components/SearchFIeld/SearchField";

const labels = ["Product Name", "Price", "Quantity", "Sum"];

const mockedMedicines = [
  {
    id: 1,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  },
  {
    id: 2,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  },
  {
    id: 3,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  },
  {
    id: 3,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  },
  {
    id: 3,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  },
  {
    id: 3,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  },
  {
    id: 3,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  },
  {
    id: 3,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  }, {
    id: 3,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  }, {
    id: 3,
    quantity: 1,
    name: "paracetamol 500",
    country: "Armenia",
    price: 1000,
  },
]

const Cart = () => {
  const [removeModal, setRemoveModal] = useState(false);
  const [removableId, setRemovableId] = useState(null);
  const [medicines, setCartMedicines] = useState(mockedMedicines);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const getCartMedicines = async () => {
    //TODO network call 
    // const response = await LanguageController.ChangeLanguage(shortCode);

    // const { success, data } = response;

    // if(response && success) {
    //    setCartMedicines(data)
    // 
  };

  useEffect(() => {
    getCartMedicines()
  }, [])

  const increment = (decrementedMedicineId) => {
    const medicinesUpdated = medicines.map((item) => {
      if (item.id === decrementedMedicineId) {
        item.quantity = Math.min(item.quantity + 1, 40);

        return { ...item };
      }

      return item;
    });

    setCartMedicines(medicinesUpdated);
  };

  const decrement = (decrementedMedicineId) => {
    const medicinesUpdated = medicines.map((item) => {
      if (item.id === decrementedMedicineId) {
        item.quantity = Math.max(item.quantity - 1, 0);

        return { ...item };
      }
      return item;
    });

    setCartMedicines(medicinesUpdated);
  };

  const openRemoveModal = (id) => {
    setRemovableId(id);
    setRemoveModal(true);
  };

  const closeRemoveModal = () => setRemoveModal(false);

  const removeItem = () => {
    // const result = await NotesController.RemoveNoteMedicine(removableId);

    const result = {
      success: true,
    };

    if (result && result.success) {
      const filteredItems = medicines.filter((medicine) => {
        return medicine.id !== removableId;
      });

      setCartMedicines(filteredItems);
      setRemoveModal(false);
    }
  };

  const getTotal = () => {
    const medicinesPriceSum = medicines.reduce(
      (total, medicine) => (total + medicine.price) * medicine.quantity,
      0
    );
    return medicinesPriceSum;
  };

  return (
    <>
      <div className="G-box-wrapper pt-100">
        <Container>
          <div className={`G-box G-box-height ${classes.cartWrapper}`}>
            <div className={classes.headerWrapper}>

            <div className={classes.header}>
              <h2>Your cart</h2>
              <button className="G-button">
                Checkout
              </button>

            </div>
            <SearchField />

            </div>

            {medicines.length ? (
              <>

                <TableContainer className={classes.tableContainer}>

                  <Table aria-label="simple table">
                    <TableHead className={classes.tableHead}>
                      <TableRow>
                        {labels.map((label) => (
                          <TableCell id={label}>{label}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {medicines.map((medicine) => (
                        <TableRow key={medicine.id}>
                          <CartItem
                            medicine={medicine}
                            increment={increment}
                            decrement={decrement}
                            onRemove={openRemoveModal}
                          />
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <div className={classes.cartFooter}>
                  {medicines.length > 3 && (
                    <Pagination variant="outlined" count={3} />
                  )}
                  <div className={classes.total}>
                    <h3>
                      <span> Total: </span> {getTotal()} dr
                    </h3>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ paddingBottom: "40px" }}>
                <Empty icon={cartIcon} name="cart" link={true} />{" "}
              </div>
            )}
          </div>
        </Container>
      </div>

      <Modal isOpen={removeModal} close={closeRemoveModal}>
        <ConfirmationModal
          cancel={closeRemoveModal}
          confirm={removeItem}
          description="Are you sure that you want to remove medicine from 'Cart medicine' list?"
        />
      </Modal>
    </>
  );
};

export default Cart;
