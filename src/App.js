import "./App.css";
import { SplitComponent } from "./design-patterns/SplitComponent";

const FirstComponent = ({ title }) => {
  return <button>{title}</button>;
};
const SecondComponent = ({ title }) => {
  return <button>{title}</button>;
};
function App() {
  return (
    <SplitComponent leftWidth={0.4} rightWidth={0.6}>
      <FirstComponent title={"god will help"} />
      <SecondComponent title={"god is helping"} />
    </SplitComponent>
  );
}

export default App;
