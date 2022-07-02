import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstName = {"Danielle"} surName = {"Bartlett"} age = {28} hairColor = {"blonde"}
      />
      <PersonCard
      firstName = {"David"} surName = {"Andrew"} age = {27} hairColor = {"brunette"} 
      />
      <PersonCard
      firstName = {"Dale"} surName = {"Grant"} age = {31} hairColor = {"blonde"} 
      />
      <PersonCard
      firstName = {"Delilah"} surName = {"Wahlburg"} age = {35} hairColor = {"black"}
      />
  </div>
  );
}

export default App;
