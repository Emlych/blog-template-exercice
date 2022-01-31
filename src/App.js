import "./App.css";
import Title from "./Components/Header/Title";
import Baseline from "./Components/Header/Baseline";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Title title="My Blog" />
        <Baseline baseline="An awesome baseline" />
      </div>
      <NavigationMenu />
      <Content />
      <Footer techno="React" formation="Reacteur" author="Emlych" />
    </div>
  );
}

export default App;
