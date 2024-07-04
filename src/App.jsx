import Cc from "./components/Cc.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Cc />
        <Examples />
      </main>
    </div>
  );
}

export default App;