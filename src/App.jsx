import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import  TableContainer from "./Components/TableContainer/TableContainer";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <div className="mainPageContainer">
        <Navbar />
<TableContainer/>
      </div>
      </div>
      </Router>
  );
}

export default App;
