import React from "react";
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app_header">
      <h1>Covid 19 Tracker</h1>
      <FormControl className="app_dropdown">
        <Select 
        variant="outlined"
        value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">OPt 2</MenuItem>
          <MenuItem value="worldwide">Opt 2</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
        </Select>
      </FormControl>
      </div>
      
    </div>
  );
}

export default App;
