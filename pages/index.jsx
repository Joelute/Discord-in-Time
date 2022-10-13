import Image from 'next/image'
import Layout from '../components/layout'
import DateDropdown from '../components/DateDropdown'
import MonthDropdown from '../components/MonthDropdown'
import YearDropdown from '../components/YearDropdown'
import HourDropdown from '../components/HourDropdown'
import MinuteDropdown from '../components/MinuteDropdown'
import SecondDropdown from '../components/SecondDropdown'
import TypeDropdown from '../components/TypeDropdown'
import useDate from '../utils/useDate'
import styles from '../styles/index.module.css'

export default function Home() {

  const {inputDate, currentDate, dateType, handleDate, handleType} = useDate()

  return (
    <Layout>
      <main className={styles.container}>
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
        <section className={styles.example}>
          <div className={styles['example-container']}>
            <div className={styles['profile-container']}>
              <Image priority src='/pfp.jpg' alt='Example Profile Picture' width={60} height={60} className={styles.profile} layout='responsive'></Image>
            </div>
            <div className={styles['example-text-container']}>
              <h2 className={styles['example-name']}>Joelute</h2>
              <h2 className={styles['example-text']}>{currentDate.currDate}</h2>
            </div>
          </div>
          <div className={styles['type-dropdown']}>
            <TypeDropdown dateType={dateType} handleType={handleType}/>
          </div>
        </section>
        
        <section className={styles.result}>&lt;t:{currentDate.timestamp}{dateType}&gt;</section>
      </main>
    </Layout>
  )
}


