import MapContainer from './components/Map/MapContainer'
import Demo from './components/Autocomplete/Demo'
// import AutocompleteSearch from './components/Autocomplete/Autocomplete'

function App() {
  return (
    <>
      <div className="autocomplete">
        <Demo />
        {/* <AutocompleteSearch /> */}
      </div>
      <MapContainer />
    </>
  );
}

export default App;
