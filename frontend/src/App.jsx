import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import RoutesComponent from "./Routes/RoutesComponent";
const App = () => {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
};

export default App;
