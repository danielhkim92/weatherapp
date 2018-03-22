import React from "react";
import Titles from  "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "de2843400cabb101e11b7146f4f0afbe";

class App extends React.Component {
  getWeather = async () => {`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();
  console.log(data);
  }
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