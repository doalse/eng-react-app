import styles from "./EmptyList.module.css"

const EmptyLIst = props=> {
    return(
        <div className="container">
            <h2 className={styles.title}>Add A New Word</h2>
        </div>
    )
}

export default EmptyLIst;