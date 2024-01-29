import logo from './logo.svg';
import './App.css';
import sampleBussinessList from './sample_businessList';
import Business from './Business';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businessList={sampleBussinessList}></BusinessList>
    </div>
  );
}

export default App;
