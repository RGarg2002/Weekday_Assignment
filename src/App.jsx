import { useState } from "react";
import JobCards from "./components/JobCards";
import Filters from "./components/Filters";
import './App.css';
import {data} from './utils/data.js';

function App() {
  const [filters, setFilters] = useState({role: "all", exp: 0, location: "all", salary: 0});

  const handleFilterSelect = (filters) => {
      setFilters(filters);
  }

  return (
    <div className="App">
        <Filters onFilterSelect={handleFilterSelect} />
        <JobCards filters={filters} />
    </div>
  );
}

export default App;
