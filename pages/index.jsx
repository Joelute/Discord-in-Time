import Image from 'next/image'
import Layout from '../components/layout'
import styled from 'styled-components'
import DateDropdown from '../components/DateDropdown'
import MonthDropdown from '../components/MonthDropdown'
import YearDropdown from '../components/YearDropdown'
import HourDropdown from '../components/HourDropdown'
import MinuteDropdown from '../components/MinuteDropdown'
import SecondDropdown from '../components/SecondDropdown'
import TypeDropdown from '../components/TypeDropdown'
import useDate from '../utils/useDate'
import styles from '../styles/Home.module.css'

export default function Home() {

  const {inputDate, currentDate, dateType, handleDate, handleType} = useDate()

  return (
    <Layout>
      <Container>
        <DateDropdownSection>
          <DateDropdownContainer>
            <DropdownLabel>Year</DropdownLabel>
            <YearDropdown inputDate={inputDate} handleDate={handleDate}/>
          </DateDropdownContainer>
          <DateDropdownContainer>
            <DropdownLabel>Month</DropdownLabel>
            <MonthDropdown inputDate={inputDate} handleDate={handleDate}/>
          </DateDropdownContainer>
          <DateDropdownContainer>
            <DropdownLabel>Date</DropdownLabel>
            <DateDropdown inputDate={inputDate} handleDate={handleDate}/>
          </DateDropdownContainer>
        </DateDropdownSection>
        <DateDropdownSection>
          <DateDropdownContainer>
            <DropdownLabel>Hour</DropdownLabel>
            <HourDropdown inputDate={inputDate} handleDate={handleDate}/>
          </DateDropdownContainer>
          <DateDropdownContainer>
            <DropdownLabel>Minute</DropdownLabel>
            <MinuteDropdown inputDate={inputDate} handleDate={handleDate}/>
          </DateDropdownContainer>
          <DateDropdownContainer>
            <DropdownLabel>Second</DropdownLabel>
            <SecondDropdown inputDate={inputDate} handleDate={handleDate}/>
          </DateDropdownContainer>
        </DateDropdownSection>
        <ExampleSection>
          <ExampleContainer>
            <Profile>
              <Image priority src='/pfp.jpg' alt='Example Profile Picture' width={60} height={60} className={styles.profile} layout='responsive'></Image>
            </Profile>
            <ExampleTextContainer>
              <ExampleName>Joelute</ExampleName>
              <ExampleText>{currentDate.currDate}</ExampleText>
            </ExampleTextContainer>
          </ExampleContainer>
          <TypeDropdownContainer>
            <TypeDropdown dateType={dateType} handleType={handleType}/>
          </TypeDropdownContainer>
        </ExampleSection>
        
        <ResultBox>&lt;t:{currentDate.timestamp}{dateType}&gt;</ResultBox>
      </Container>
    </Layout>
  )
}

const Container = styled.main`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5em auto;
  

  @media (min-width:1300px) {
    width:45%
  }

  @media (min-width: 1000px) and (max-width: 1300px) {
    width:55%
  }

  @media(min-width: 800px) and (max-width:1000px){
    width: 70%
  }

  @media(max-width: 800px) {
    width: 90%
  }
`

const DateDropdownSection = styled.section`
  display:flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em 0;

  @media(max-width:600px) {
    flex-direction: column;
  }
`

const DateDropdownContainer = styled.div`
`

const ResultBox = styled.section`
  width: 100%;
  border-radius: 10px;
  color: #EBEBEB;
  background-color: #393D41;
  font-size: 1.2rem;
  padding:.6em;
  border-radius: 10px;
`

const ExampleSection = styled.section`
  display:flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 5em 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    padding:2em 0;
  }
`

const Profile = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
`

const ExampleContainer = styled.div`
  display:flex;
  align-items:center;
`

const ExampleTextContainer = styled.div`
  padding-left: 1em;
  font-size: 1.3rem;
`

const ExampleName = styled.h1`
  font-size: 1.3rem;
  padding-top:  .2em;
  color: #EBEBEB;
`

const ExampleText = styled.h1`
  font-size: 1.3rem;
  margin-top: .2em;
  padding: .2em;
  background-color: #393D41;
  color: #EBEBEB;
  border-radius: 5px;
`

const DropdownLabel = styled.h1`
  font-size: 1rem;
  color: #B3B5BD;
  letter-spacing: 2px;
  padding:0.2em 0.5em;
`

const TypeDropdownContainer = styled.div`
  @media(max-width: 600px) {
    width: 100%;
    padding: 1em 0;
  }
`


