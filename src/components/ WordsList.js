import styles from "./WordsList.module.css"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const WordsList = props => {
    return(
       <div className="container">
            <ul className={styles['list-wrapper']}>
                {props.wordsList.map((el, num)=> {
                    const grabID = () => {
                        props.onRemove(num)
                    }
                    return <li key={el.id}>
                        <div>
                            <span>{el.word}</span> - <span>{el.translation}</span>
                        </div>
                        <IconButton aria-label="delete" size="medium" className={styles.button} onClick={grabID} >
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </li>
                })}
            </ul>
       </div>
    )
}

export default WordsList;