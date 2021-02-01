import React, { useState, useEffect } from "react";

import notesIcon from "../../assets/icons/notes.png";

import ConfirmationModal from "../../popups/ConfirmationModal/ConfirmationModal";

import Languages from "../../platform/services/languages";

import Modal from "../../components/modal";
import Loading from "../../components/Loading/Loading";

import NotesController from "../../platform/api/notes";

import Empty from "../../components/Empty/Empty";

import NoteItem from "./NoteItem";

import SearchField from "../../components/SearchFIeld/SearchField";
import useStyles from "./Notes.style";
import Pagination from "@material-ui/lab/Pagination";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Container } from "@material-ui/core";
import EditNote from "./EditNote";
import BusyWrapper from "../../components/BusyWrapper/BusyWrapper";
import { useHistory } from "react-router-dom";
import useGlobal from "../../platform/store";
import NeedToLogin from "../../components/NeedToLogin";

const {
  notesPage: { title, product_name, note, remove },
  modal_actions: { remove_note_medicine },
} = Languages.Translations;

const labels = ["Product Name", "Note", "Edit/aDelete"];

const Notes = () => {
  const [{ isAuthenticated }] = useGlobal();
  const [medicines, setMedicines] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [itemCount, setItemCount] = useState();
  const [activePage, setActivePage] = useState(1);
  const [comment, setComment] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  const [removeModal, setRemoveModal] = useState(false);
  const [removableId, setRemovableId] = useState(null);
  const [activeRow, setActiveRow] = useState();

  const [editModal, setEditModal] = useState(false);

  const history = useHistory();

  const openRemoveModal = (event,id) => {
    event.stopPropagation();
    setRemovableId(id);
    setRemoveModal(true);
  };

  const openEditModal = (event, row) => {
    event.stopPropagation();
    setActiveRow(row);
    setRemovableId(row.id);
    setEditModal(true);
  };

  const closeRemoveModal = () => setRemoveModal(false);

  const getNoteMedicines = async () => {
    const body = {
      name: searchTerm,
      paging: {
        count: 5,
        page: activePage,
      },
    };

    if (isAuthenticated) {
      const response = await NotesController.GetNoteMedicines(body);
      if (response) {
        setIsLoading(false);
        setMedicines(response.data.data);
        setPageCount(response.data.pageCount);
        setItemCount(response.data.itemCount);
      }
    }
  };

  useEffect(() => {
    getNoteMedicines();
  }, [activePage]);

  const closeEditModal = () => setEditModal(false);

  const removeItem = async (event) => {
    setRemoveModal(true);

    const result = await NotesController.RemoveNoteMedicine(removableId);

    if (result && result.success) {
      const filteredItems = medicines.filter((medicine) => {
        return medicine.medicineId !== removableId;
      });

      setMedicines(filteredItems);
      setRemoveModal(false);
      getNoteMedicines();
    }
  };

  const handlePageChange = (event, value) => {
    setActivePage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const moveToDetails = (id) => {
    history.push(`/medicine-details/${id}`);
  };

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchHandler = () => {
    if (searchTerm) {
      getNoteMedicines();
    }
  };

  return (
    <>
    {isAuthenticated ? (
    <BusyWrapper isBusy={isLoading}>
      <div className="G-box-wrapper pt-100">
        <Container>
          <div className={`G-box ${classes.notesWrapper}`}>
            <div className={classes.header}>
              <h2 style={{ marginBottom: "20px" }}>Notes</h2>
              <SearchField
                changeHandler={(e) => changeHandler(e)}
                searchHandler={searchHandler}
                searchTerm={searchTerm}
              />
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
                        <TableRow
                          key={medicine.medicineId}
                          onClick={() => moveToDetails(medicine.medicineId)}
                          style={{ cursor: "pointer" }}
                        >
                          <NoteItem
                            medicine={medicine}
                            openRemoveModal={openRemoveModal}
                            openEditModal={openEditModal}
                          />
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                {itemCount > 5 && (
                  <div className={classes.pagination}>
                    <Pagination
                      classes={classes.pagination}
                      count={pageCount}
                      page={activePage}
                      onChange={handlePageChange}
                      variant="outlined"
                    />
                  </div>
                )}
              </>
            ) : (
              <Empty name="notes list" icon={notesIcon} link={true} />
            )}
          </div>
        </Container>

        <Modal isOpen={editModal} close={closeEditModal}>
          <EditNote
            activeRow={activeRow}
            onClose={closeEditModal}
            notes={medicines}
            getNoteMedicines={getNoteMedicines}
          />
        </Modal>

        <Modal isOpen={removeModal} close={closeRemoveModal}>
          <ConfirmationModal
            cancel={closeRemoveModal}
            confirm={removeItem}
            description="Are you sure that you want to remove medicine from 'Note medicine' list?"
          />
        </Modal>
      </div>
    </BusyWrapper>
      ) : (
        <NeedToLogin name="note medicines"/>
      )}
    </>
  );
};

export default Notes;
