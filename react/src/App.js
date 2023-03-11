import ContainerComponent from "./components/containerComponent/containerComponent";
import './AppStyle.scss'
import {data_1} from "./data/data";
import {data_2} from "./data/data";
function App() {
  return (
    <div className="App">
        <ContainerComponent data={data_2}/>
        <ContainerComponent data={data_1}/>
    </div>
  );
}

export default App;
