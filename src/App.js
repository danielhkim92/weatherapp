import React from "react";
import Titles from  "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "de2843400cabb101e11b7146f4f0afbe";

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
      );
  }
};

export default App;