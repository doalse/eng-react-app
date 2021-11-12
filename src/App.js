import "./App.css";
import Header from "./components/Header";
import InputsWords from "./components/InputsWords";
import { useState } from "react";
import WordsList from "./components/WordsList";
import { useEffect } from "react";
import EmptyLIst from "./components/EmptyLIst";

const wordsArray = [];

function App() {
    const [words, setWords] = useState(wordsArray);
    const [editWord, setEditWord] = useState("");

    useEffect(() => {
        // Update the document title using the browser API
        if (localStorage.getItem("data") !== null) {
            setWords(JSON.parse(localStorage.getItem("data")));
        }
    }, []);

    const addWordHandler = (obj) => {
        const found = words.find((element) => element.word === obj.word);
        if (found === undefined) {
            const data = [obj, ...words];
            setWords(data);
            localStorage.setItem("data", JSON.stringify(data));
        } else {
            console.log("the list has this word");
        }
    };

    const removeItemHandler = (id) => {
        const tempWords = words;
        tempWords.splice(id, 1);
        setWords([...tempWords]);
        localStorage.setItem("data", JSON.stringify([...words]));
    };

    const updateNewWords = (data) => {
        console.log(data);
        const tempWords = words;
        tempWords.splice(data.id, 1);
        tempWords.splice(data.id, 0, data);
        setWords([...tempWords]);
        localStorage.setItem("data", JSON.stringify([...words]));
    };

    const editItemHandler = (id) => {
        setEditWord(words[id]);
    };

    return (
        <>
            <Header />
            <main>
                <InputsWords onAddWord={addWordHandler} />
                {words.length > 0 ? (
                    <WordsList
                        wordsList={words}
                        onRemove={removeItemHandler}
                        onEdit={editItemHandler}
                        editWord={editWord}
                        updateNewWords={updateNewWords}
                    />
                ) : (
                    <EmptyLIst />
                )}
            </main>
        </>
    );
}

export default App;
