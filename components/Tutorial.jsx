import styles from '../styles/tutorial.module.css'

export default function Tutorial ({tutorial, className}) {
    return(
        <div className={`${styles.container} ${className}`}>
            <h2 className={styles.tutorial}>{tutorial}</h2>
            <h3 className={styles.continue}>Next ▶</h3>
        </div>
    )
}