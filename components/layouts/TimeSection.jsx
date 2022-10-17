import HourDropdown from '../elements/HourDropdown'
import MinuteDropdown from '../elements/MinuteDropdown'
import SecondDropdown from '../elements/SecondDropdown'
import styles from '../../styles/index.module.css'

export default function TimeSection({inputDate, handleDate}) {
    return (
        <section className={styles.date}>
            <div>
                <h3 className={styles['date-label']}>Hour</h3>
                <HourDropdown inputDate={inputDate} handleDate={handleDate}/>
            </div>
            <div>
                <h3 className={styles['date-label']}>Minute</h3>
                <MinuteDropdown inputDate={inputDate} handleDate={handleDate}/>
            </div>
            <div>
                <h3 className={styles['date-label']}>Second</h3>
                <SecondDropdown inputDate={inputDate} handleDate={handleDate}/>
            </div>
        </section>
    )
}

