import { useState } from "react";
import styles from "./WordsList.module.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditWord from "./EditWord";

const WordsList = (props) => {
    const [isModalShowing, setIsModalShowing] = useState(false);
    const [id, setId] = useState("");

    const showModalHandler = () => {
        setIsModalShowing(true);
    };

    const hideModalHandler = () => {
        setIsModalShowing(false);
    };

    return (
        <>
            {isModalShowing && (
                <EditWord
                    editWord={props.editWord}
                    hideModalHandler={hideModalHandler}
                    updateNewWords={props.updateNewWords}
                    id={id}
                />
            )}
            <div className="container">
                <h2 className={styles.title}>Your Dictionary</h2>
                <ul className={styles["list-wrapper"]}>
                    {props.wordsList.map((el, num) => {
                        const grabID = () => {
                            props.onRemove(num);
                        };

                        const grabEditID = () => {
                            props.onEdit(num);
                            setId(num);
                        };

                        const editWordHandler = () => {
                            showModalHandler();
                            grabEditID();
                        };

                        return (
                            <li key={el.word}>
                                <div>
                                    <span>{el.word}</span> -{" "}
                                    <span>{el.translation}</span>
                                </div>
                                <div>
                                    <IconButton
                                        aria-label="edit"
                                        size="medium"
                                        className={"edit"}
                                        onClick={editWordHandler}
                                    >
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        size="medium"
                                        className={styles.button}
                                        onClick={grabID}
                                    >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default WordsList;
