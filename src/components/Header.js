import styles from "./Header.module.css"

const Header = props => {
    return(
        <header className={styles.header}>
            <div className="container">
                <h2>Learn English App</h2>
            </div>
        </header>
    )
}

export default Header;