import logo from './logo.svg';
import './App.css';
import sampleBussinessList from './sample_businessList';
import Business from './Business';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

const b1 = sampleBussinessList[0];
console.log(b1);

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businessList={sampleBussinessList}></BusinessList>
    </div>
  );
}

export default App;
