import logo from "../assets/images/logo.svg";
import Parent from "../components/Parent/Parent";
import OddParent from "../components/OddParent/OddParent";

const Home = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Parent />
      <OddParent />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Home;
