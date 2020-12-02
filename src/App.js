import logo from './logo.svg';
import './App.css';
import WeatherForecast from "./components/WeatherForecast";

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     Assignment 2 - Weather App
    //   </header>
    //   <main>
        <div className="App-Container">
          <WeatherForecast/>
        </div>
    //   </main>
    // </div>
  );
}

export default App;