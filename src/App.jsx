
import styled, { keyframes } from 'styled-components'
import DateDropdown from './components/DateDropdown'
import MonthDropdown from './components/MonthDropdown'
import YearDropdown from './components/YearDropdown'
import HourDropdown from './components/HourDropdown'
import MinuteDropdown from './components/MinuteDropdown'
import SecondDropdown from './components/SecondDropdown'
import TypeDropdown from './components/TypeDropdown'
import useDate from './useDate'
import ProfilePic from './assets/pfp.jpg'


function App() {

  const {inputDate, currentDate, dateType, handleDate, handleType} = useDate()

  return (
    <div>
      <Navbar>
        <NavbarLogo>Discord</NavbarLogo> In Time
      </Navbar>
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
            <Profile src={ProfilePic} alt='Example Profile Picture'></Profile>
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
    </div>
  )
}

const Navbar = styled.nav`
  height: 2.2em;
  width: 100%;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  display:flex;
  align-items: center;
  justify-content:center;
  color: #EBEBEB;
  font-size: 2rem;
  letter-spacing: 1px;
  transition: color 1s ease, background-color 1s ease;
  
  :hover,
  :focus {
    background-color:#9EAEE5;
    color: white;
  }
`

const NavbarLogo = styled.h1`
  color: inherit;
  font-size:inherit;
  padding: 0.3em;
  background-color: #7289DA;
  border-radius: 1rem;
  margin-right: 0.2em;
`

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

const Profile = styled.img.attrs(props => ({src: props.src}))`
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;
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

const ExampleContainer = styled.div`
  display:flex;
  align-items:center;
`

const ExampleTextContainer = styled.div`
  padding: 0 1em;
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





export default App
