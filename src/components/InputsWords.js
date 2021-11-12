import { useState } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styles from "./InputsWords.module.css";

const InputsWords = (props) => {
    const [word, setWord] = useState("");
    const [translation, setTranslation] = useState("");

    const onChangeWordHandler = (e) => {
        setWord(e.target.value);
    };

    const onChangeTranslateHandler = (e) => {
        setTranslation(e.target.value);
    };

    const addToDictionary = () => {
        const obj = {
            word: word,
            translation: translation,
            id: Math.floor(Math.random() * 1000000000),
        };
        setTranslation("");
        setWord("");
        if (word.trim().length > 0 && translation.trim().length > 0) {
            props.onAddWord(obj);
        } else {
            console.log("Add words");
        }
    };

    return (
        <>
            <div className="container">
                <div className={styles.wrapper}>
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="Add Word"
                            variant="standard"
                            onChange={onChangeWordHandler}
                            value={word}
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-basic1"
                            label="Add Translation"
                            variant="standard"
                            onChange={onChangeTranslateHandler}
                            value={translation}
                        />
                    </div>
                    <Fab
                        color="primary"
                        aria-label="add"
                        onClick={addToDictionary}
                    >
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        </>
    );
};

export default InputsWords;
