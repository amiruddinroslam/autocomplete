import MapContainer from './components/Map/MapContainer'
import Places from './components/Autocomplete/Places'
import RecentSearches from './components/Autocomplete/RecentSearches'

function App() {
  return (
    <>
      <div className="autocomplete">
        <Places />
      </div>
      <div className="recent-searched">
        <RecentSearches />
      </div>
      <MapContainer />
    </>
  );
}

export default App;
