import JobCards from "./components/JobCards";
import Filters from "./components/Filters";
import './App.css';
import {data} from './utils/data.js';

function App() {
  return (
    <div className="App">
        <Filters />
        <JobCards />
    </div>
  );
}

export default App;
