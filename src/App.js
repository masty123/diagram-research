import logo from './logo.svg';
import './App.css';
import QReader from './qr_reader'
import Diagram from "./diagram"
import FlowChart from "./diam_flow_chart"

const pageCommands = ['pageSize', 'pageOrientation', 'pageColor'];
const menuCommands = ['bringToFront', 'sendToBack', 'lock', 'unlock'];

function App() {
  return (
      <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header>
      <QReader/> */}
          <div className="row mx-5"> 
            <div className="col-12">
               <h5 className="font-weight-bold text-left">Devextreme Diagram Chart</h5>
            </div>
            <div className="col-12">
               <Diagram/>
            </div>
          </div>
          <div className="row  mx-5"> 
            <div className="col-12">
               <h5 className="font-weight-bold text-left">React Flow Diagram Chart</h5>
            </div>
            <div className="col-12">
                  <div className="my-2" style={{height: 800}}>
                      <FlowChart/> 
                </div>
            </div>
          </div>

      </div>
  );
}

export default App;
