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
import useIntro from '../utils/useIntro'
import styles from '../styles/index.module.css'
import Tutorial from '../components/Tutorial'


export default function Home() {

  const {inputDate, currentDate, dateType, handleDate, handleType} = useDate()

  const {intro, handleIntro, nextSection} = useIntro()

  return (
    <Layout intro={intro} handleIntro={handleIntro}>
      <div onClick={() => nextSection()}>
        <main className={`${styles.container}`}>
          <section className={`${styles.date} ${intro.isIntro && intro.section === 1? styles.blackout: ''}`}>
            <div>
              <h3 className={styles['date-label']}>Year</h3>
              <YearDropdown inputDate={inputDate} handleDate={handleDate} disabled={intro.isIntro? true: false}/>
            </div>
            <div>
              <h3 className={styles['date-label']}>Month</h3>
              <MonthDropdown inputDate={inputDate} handleDate={handleDate} disabled={intro.isIntro? true: false}/>
            </div>
            <div>
              <h3 className={styles['date-label']}>Date</h3>
              <DateDropdown inputDate={inputDate} handleDate={handleDate} disabled={intro.isIntro? true: false}/>
            </div>
          </section>

          {intro.isIntro && intro.section === 1? 
            <Tutorial className={styles['tutorial-1']} tutorial='Select your date of choice here!'>
            </Tutorial>
          :''}

          <section className={`${styles.date} ${intro.isIntro && intro.section === 2 ? styles.blackout: ''}`}>
            <div>
              <h3 className={styles['date-label']}>Hour</h3>
              <HourDropdown inputDate={inputDate} handleDate={handleDate} disabled={intro.isIntro? true: false}/>
            </div>
            <div>
              <h3 className={styles['date-label']}>Minute</h3>
              <MinuteDropdown inputDate={inputDate} handleDate={handleDate} disabled={intro.isIntro? true: false}/>
            </div>
            <div>
              <h3 className={styles['date-label']}>Second</h3>
              <SecondDropdown inputDate={inputDate} handleDate={handleDate} disabled={intro.isIntro? true: false}/>
            </div>
          </section>

          {intro.isIntro && intro.section === 2? 
            <Tutorial className={styles['tutorial-2']} tutorial='Select your time of choice here!'>
            </Tutorial>
          :''}

          <section className={styles.example}>
            <div className={`${styles['example-container']} ${intro.isIntro && intro.section === 3 ? styles.blackout: ''}`}>
              <div className={styles['profile-container']}>
                <Image priority src='/pfp.jpg' alt='Example Profile Picture' width={60} height={60} className={styles.profile} layout='responsive'></Image>
              </div>
              <div className={styles['example-text-container']}>
                <h2 className={styles['example-name']}>Joelute</h2>
                <h2 className={styles['example-text']}>{currentDate.currDate}</h2>
              </div>
            </div>

            {intro.isIntro && intro.section === 3? 
              <Tutorial className={styles['tutorial-3']} tutorial='Here is a preview of how the timestamp should look on Discord!'>
              </Tutorial>
            :''}

            <div className={`${styles['type-dropdown']} ${intro.isIntro && intro.section === 4 ? styles.blackout: ''}`}>
              <TypeDropdown dateType={dateType} handleType={handleType} disabled={intro.isIntro? true: false}/>
            </div>

            {intro.isIntro && intro.section === 4? 
              <Tutorial className={styles['tutorial-4']} tutorial='Change how the timestamp looks on Discord!'>
              </Tutorial>
            :''}

          </section>



          <section className={`${styles['result-container']} ${intro.isIntro && intro.section === 5 ? styles.blackout: ''}`}>
            <div className={styles.result}>
              &lt;t:{currentDate.timestamp}{dateType}&gt;
            </div>
          </section>

          {intro.isIntro && intro.section === 5? 
              <Tutorial className={styles['tutorial-5']} tutorial='Finally, copy and paste the code into Discord!'>
              </Tutorial>
          :''}
        </main>
      </div>
    </Layout>
  )
}


