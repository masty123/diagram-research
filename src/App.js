import logo from './logo.svg';
import './App.css';
import QReader from './qr_reader'
import Diagram from "./diagram"
import FlowChart from "./diam_flow_chart"
import GoogleSheet from './googlesheet';
import HookLearn from "./usestate_usereducer_learn";
import UseEffectLearn from "./useeffect_learn";
import UseRefLearn from "./useref_learn";
import UseLayoutEffectLearn from "./uselayouteffect_learn"
import UseImperativeHandleLearn from "./useimperativehandle_learn/useImperativeHandle";
import UseContextLearn from "./usecontext_learn/usecontext_learn"
import UseMemo from "./usememo_learn";
import UseCallback from "./usecallback_learn/CallBackTutorial";

const pageCommands = ['pageSize', 'pageOrientation', 'pageColor'];
const menuCommands = ['bringToFront', 'sendToBack', 'lock', 'unlock'];

function App() {
  return (
      <div className="" style={{height: "100%"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
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
      </header>
      {/* <QReader/> */}
      {/* <HookLearn/> */}
      {/* <UseEffectLearn /> */}
      {/* <UseRefLearn/> */}
      {/* <UseLayoutEffectLearn/> */}
      <UseImperativeHandleLearn/>
      {/* <UseContextLearn/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}

          {/* <div className="row mx-5"> 
            <div className="col-12">
               <h5 className="font-weight-bold text-left">Devextreme Diagram Chart</h5>
            </div>
            <div className="col-12">
               <Diagram/>
            </div>
          </div> */}

          {/* <div className="row  mx-5"> 
            <div className="col-12">
               <h5 className="font-weight-bold text-left">React Flow Diagram Chart</h5>
            </div>
            <div className="col-12">
                  <div className="my-2" style={{height: 800}}>
                      <FlowChart/> 
                </div>
            </div>
          </div> */}

        {/* <div className="row mx-5"> 
            <div className="col-12">
               <h5 className="font-weight-bold text-left">Google  Sheet</h5>
            </div>
            <div className="col-12">
              <GoogleSheet/>
            </div>
          </div> */}

      </div>
  );
}

export default App;
