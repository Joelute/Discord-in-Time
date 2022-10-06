
import styled from 'styled-components'
import DateDropdown from './components/DateDropdown'
import MonthDropdown from './components/MonthDropdown'
import YearDropdown from './components/YearDropdown'
import useDate from './useDate'


function App() {

  const {inputDate, currentDate, handleDate} = useDate()

  return (
    <Container>
      <DateDropdownSection>
        <YearDropdown inputDate={inputDate} handleDate={handleDate}/>
        <MonthDropdown inputDate={inputDate} handleDate={handleDate}/>
        <DateDropdown inputDate={inputDate} handleDate={handleDate}/>
      </DateDropdownSection>
      <ResultBox>&lt;t:{currentDate.timestamp}&gt;</ResultBox>
    </Container>
  )
}

const Container = styled.main`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5em auto;
  

  @media (min-width:800px) {
    width:40%
  }
`

const DateDropdownSection = styled.section`
  display:flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em 0;
`

const ResultBox = styled.section`
  width: 100%;
  border-radius: 10px;
  color: #D6D6D6;
  background-color: #393D41;
  font-size: 1.2rem;
  padding:.6em;
  border-radius: 10px;
`

export default App
