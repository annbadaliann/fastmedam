import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonLoader from '../../components/ButtonLoader/ButtonLoader';
import InputField from '../../components/InputField/InputField';
import NotesController from '../../platform/api/notes';

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: "10px",
        color: "#585858",
        fontSize: "24px"
    },
    commentField: {
        width: "100%",
        margin: "20px 0",
        height: "160px"
    }
}))

function EditNote({activeRow, onClose, getNoteMedicines}) {
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit } = useForm({
        mode: "onChange",
    });

    const onSubmit = async (formData) => {
        setIsLoading(true);

        const response = await NotesController.EditNoteMedicine({
            medicineId: activeRow.medicineId,
            note: formData.note
        });

        if(response && response.success){
            setIsLoading(false);
            onClose(false)
            getNoteMedicines();

        }
    }

    return (
        <div>
            <h3 className={classes.title}>Add note</h3>
            <p>Write note to medicine</p>
            <form onSubmit={handleSubmit(onSubmit)}>
       <textarea
                name="note"
                ref={register()}
                placeholder="Note" className={classes.commentField} defaultValue={activeRow.note}/>
                <ButtonLoader type="submit" isLoading={isLoading}> Save note</ButtonLoader>
            </form>
        </div>
    )
}

export default EditNote;