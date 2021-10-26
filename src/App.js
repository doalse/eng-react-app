import './App.css';
import Header from "./components/Header";
import InputsWords from "./components/InputsWords";
import {useState} from "react";
import WordsList from "./components/ WordsList";
import {useEffect} from "react";
import EmptyLIst from "./components/EmptyLIst";

const wordsArray = []

function App() {
    const [words, setWords] = useState(wordsArray)

    useEffect(() => {
        // Update the document title using the browser API
        if(localStorage.getItem("data") !== null) {
            setWords(JSON.parse(localStorage.getItem('data')))
        }
    }, []);

    const addWordHandler = (obj) => {
        const found = words.find(element => element.word === obj.word);
        if(found == undefined) {
            const data = [obj,...words]
            setWords(data)
            localStorage.setItem('data', JSON.stringify(data));
        } else {
            console.log('the list has this word')
        }
    }

    const removeItemHandler = (id) => {
        words.splice(id, 1)
        setWords([...words])
        localStorage.setItem('data', JSON.stringify([...words]));
    }

    return (
        <>
            <Header/>
            <main>
                <InputsWords onAddWord={addWordHandler} />
                {words.length>0 ? <WordsList wordsList={words} onRemove={removeItemHandler} /> : <EmptyLIst />}
            </main>
        </>
    );
}

export default App;
