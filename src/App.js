import "./App.css";
import { SplitComponent } from "./design-patterns/SplitComponent";

const FirstComponent = () => {
  return <button>God help</button>;
};
const SecondComponent = () => {
  return <button>God do all job</button>;
};
function App() {
  return <SplitComponent Left={FirstComponent} Right={SecondComponent} />;
}

export default App;
