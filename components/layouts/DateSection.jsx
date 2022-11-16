import DateDropdown from '../elements/DateDropdown'
import MonthDropdown from '../elements/MonthDropdown'
import YearDropdown from '../elements/YearDropdown'
import styles from '../../styles/index.module.css'

export default function DateSection({inputDate, handleDate, className, disabled}) {
    return (
        <section className={`${styles.date} ${className}`}>
            <div>
                <h3 className={styles['date-label']}>Year</h3>
                <YearDropdown inputDate={inputDate} handleDate={handleDate} disabled={disabled}/>
            </div>
            <div>
                <h3 className={styles['date-label']}>Month</h3>
                <MonthDropdown inputDate={inputDate} handleDate={handleDate} disabled={disabled}/>
            </div>
            <div>
                <h3 className={styles['date-label']}>Date</h3>
                <DateDropdown inputDate={inputDate} handleDate={handleDate} disabled={disabled}/>
            </div>
        </section>
    )
}