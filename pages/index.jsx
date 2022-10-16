import Image from 'next/image'
import Layout from '../components/layouts/layout'
import DateSection from '../components/layouts/DateSection'
import TimeSection from '../components/layouts/TimeSection'
import TypeDropdown from '../components/elements/TypeDropdown'
import useDate from '../utils/useDate'
import styles from '../styles/index.module.css'

export default function Home() {

  const {inputDate, currentDate, dateType, handleDate, handleType} = useDate()

  return (
    <Layout>
      <main className={styles.container}>
        <DateSection inputDate={inputDate} handleDate={handleDate}></DateSection>
        <TimeSection inputDate={inputDate} handleDate={handleDate}></TimeSection>
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


