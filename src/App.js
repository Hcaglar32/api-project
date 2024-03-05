import logo from './logo.svg';
import './App.css';
import SearchHeader from './searchHeader';
import axios from 'axios';

function App() {
  const handleSubmit = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID Zjhino2TFh5Z0C7TTk25RoGwJ0DdJwm11BGQ3B5bldA '
      },
      params: {
        query: term,
      },
    });
    debugger;
  }
  return (
    <div className="App"><SearchHeader search={handleSubmit} /></div>
  );
}

export default App;
