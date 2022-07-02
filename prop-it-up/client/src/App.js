import './App.css';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <People firstName = {"Danielle"} surName = {"Bartlett"} age = {28} hairColor = {"blonde"} />
      <People firstName = {"David"} surName = {"Andrew"} age = {27} hairColor = {"brunette"} />
      <People firstName = {"Dale"} surName = {"Grant"} age = {31} hairColor = {"blonde"} />
      <People firstName = {"Delilah"} surName = {"Wahlburg"} age = {35} hairColor = {"black"} />
    </div>
  );
}

export default App;
