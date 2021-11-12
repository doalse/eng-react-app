import styles from "./EditWord.module.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditWord = (props) => {
    const [newWord, setNewWord] = useState(props.editWord.word);
    const [newTranslation, setNewTranslation] = useState(
        props.editWord.translation
    );
    const updateWord = (e) => {
        setNewWord(e.target.value);
    };
    const updateTranslation = (e) => {
        setNewTranslation(e.target.value);
    };

    const editCompleteHandler = () => {
        if (newWord.trim().length > 0 && newTranslation.trim().length > 0) {
            props.hideModalHandler();
            const updateWord = {
                word: newWord,
                translation: newTranslation,
                id: props.id,
            };
            props.updateNewWords(updateWord);
        }
    };

    let color =
        newWord.trim().length > 0 && newTranslation.trim().length > 0
            ? "success"
            : "error";
    let frase =
        newWord.trim().length > 0 && newTranslation.trim().length > 0
            ? "OK"
            : "Error";

    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.modal}>
                <TextField
                    type="text"
                    value={newWord}
                    onInput={updateWord}
                    variant="standard"
                    label="Edit Word"
                />
                <TextField
                    type="text"
                    value={newTranslation}
                    variant="standard"
                    onInput={updateTranslation}
                    label="Edit Transration"
                />
                <Button
                    onClick={editCompleteHandler}
                    className={styles.mybtn}
                    variant="contained"
                    color={color}
                >
                    {frase}
                </Button>
            </div>
        </>
    );
};

export default EditWord;
