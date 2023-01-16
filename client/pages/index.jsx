import Image from 'next/image'
import Layout from '../components/layouts/layout'
import DateSection from '../components/layouts/DateSection'
import TimeSection from '../components/layouts/TimeSection'
import TypeDropdown from '../components/elements/TypeDropdown'
import useDate from '../utils/useDate'
import useControl from '../utils/useControl'
import styles from '../styles/index.module.css'
import Tutorial from '../components/elements/Tutorial'
import { useState } from 'react'
import NewDate from '../components/elements/NewDate'
import { useSession } from 'next-auth/react'


export default function Home() {

  const { data } = useSession()

  const {inputDate, currentDate, dateType, handleDate, handleType} = useDate()

  const {intro, createNewDate, handleIntro, nextSection, handleCreateNewDate} = useControl()

  return (
    <Layout intro={intro} handleIntro={handleIntro}>
      <div onClick={() => nextSection()}>
        <main className={styles.container}>
          <DateSection 
            inputDate={inputDate}
            handleDate={handleDate}
            disabled={intro.isIntro? true: false}
            className={`${intro.isIntro && intro.section === 1? styles.blackout: ''}`}>
          </DateSection>

          {intro.isIntro && intro.section === 1? 
            <Tutorial className={styles['tutorial-1']} tutorial='Select your date of choice here!'>
            </Tutorial>
          :''}

          <TimeSection 
            inputDate={inputDate} 
            handleDate={handleDate}
            disabled={intro.isIntro? true: false}
            className={`${intro.isIntro && intro.section === 2? styles.blackout: ''}`}>
          </TimeSection>

          {intro.isIntro && intro.section === 2? 
            <Tutorial className={styles['tutorial-2']} tutorial='Select your time of choice here!'>
            </Tutorial>
          :''}

          <section className={styles.example}>
            <div className={`${styles['example-container']} ${intro.isIntro && intro.section === 3 ? styles.blackout: ''}`}>
              <div className={styles['profile-container']}>
                {data?
                  <img src={data.user.image} alt='Example Profile Picture' className={styles.profile}></img>:
                  <Image priority src='/pfp.jpg' alt='Example Profile Picture' width={60} height={60} className={styles.profile} layout='responsive'></Image>
                }
              </div>
              <div className={styles['example-text-container']}>
                <h2 className={styles['example-name']}>{data? data.user.name: 'Joelute'}</h2>
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
              <i className="uil uil-plus-circle" onClick={handleCreateNewDate}></i>
            </div>
            
          </section>

          {intro.isIntro && intro.section === 5? 
              <Tutorial className={styles['tutorial-5']} tutorial='Finally, copy and paste the code into Discord!'>
              </Tutorial>
          :''} 
          {createNewDate && <NewDate timestamp={currentDate.timestamp} handleCreateNewDate={handleCreateNewDate}></NewDate>}
        </main>

       
      </div>
    </Layout>
  )
}


