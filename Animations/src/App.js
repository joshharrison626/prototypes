import { ReactComponent as LawnmowerIllo } from "./lawnmower-illo.svg";
import { ReactComponent as DanceDanceIllo } from "./dance-dance-illo.svg";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="lawnmower-illo">
        <LawnmowerIllo />
      </div>
      <div className="dance-dance-illo">
        <DanceDanceIllo />
      </div>
    </div>
  );
}

export default App;
