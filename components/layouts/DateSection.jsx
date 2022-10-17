import DateDropdown from '../elements/DateDropdown'
import MonthDropdown from '../elements/MonthDropdown'
import YearDropdown from '../elements/YearDropdown'
import styles from '../../styles/index.module.css'

export default function DateSection({inputDate, handleDate}) {
    return (
        <section className={styles.date}>
            <div>
                <h3 className={styles['date-label']}>Year</h3>
                <YearDropdown inputDate={inputDate} handleDate={handleDate}/>
            </div>
            <div>
                <h3 className={styles['date-label']}>Month</h3>
                <MonthDropdown inputDate={inputDate} handleDate={handleDate}/>
            </div>
            <div>
                <h3 className={styles['date-label']}>Date</h3>
                <DateDropdown inputDate={inputDate} handleDate={handleDate}/>
            </div>
        </section>
    )
}