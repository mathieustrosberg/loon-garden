import "./App.css";

import Home from "./containers/Home";
import Menu from "./containers/Menu";
import Reservation from "./containers/Reservation";
import Informations from "./containers/Informations";
import Footer from "./containers/Footer";

function App() {
  return (
    <div>
      <Home />
      <Menu />
      <Reservation />
      <Informations />
      <Footer />
    </div>
  );
}

export default App;
