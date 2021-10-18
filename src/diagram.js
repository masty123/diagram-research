import React, {Component} from 'react';
import Diagram, { ContextMenu, ContextToolbox, PropertiesPanel, Group, Tab, HistoryToolbar, ViewToolbar, MainToolbar, Command, Toolbox, CustomShape } from 'devextreme-react/diagram';
import { confirm } from 'devextreme/ui/dialog';
import 'whatwg-fetch';

const pageCommands = ['pageSize', 'pageOrientation', 'pageColor'];
const menuCommands = ['bringToFront', 'sendToBack', 'lock', 'unlock'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step_list: [
        {text: "Step Flow 1", id: 1, type: "rectangle"},
        {text: "Step Flow 2", id: 2, type: "diamond"},
        {text: "Step Flow 3", id: 3, type: "ellipse"},
      ]
    }

    this.diagramRef = React.createRef();
  }

  onCustomCommand(e) {
    if(e.name === 'clear') {
      var result = confirm('Are you sure you want to clear the diagram? This action cannot be undone.', 'Warning');
      result.then(
        function(dialogResult) {
          if(dialogResult) {
            e.component.import('');
          }
        }
      );
    }
  }
  componentDidMount() {
    var diagram = this.diagramRef.current.instance;
    fetch('https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/diagram-flow.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        diagram.import(JSON.stringify(json));
      })
      .catch(function() {
        throw 'Data Loading Error';
      });
  }

  exportStuff(){
    // this.diagramRef.current.export();
    var export_data = this.diagramRef.current.instance.export()
    console.log(JSON.parse(export_data));
  }

  render() {
    const {step_list} = this.state;
    return (
      <>
      <Diagram id="diagram" ref={this.diagramRef} onCustomCommand={this.onCustomCommand}>
        <ContextMenu enabled={true} commands={menuCommands} />
        <ContextToolbox enabled={true} category="flowchart" shapeIconsPerRow={5} width={200} />
        <PropertiesPanel visibility="visible">
          <Tab>
            <Group title="Page Properties" commands={pageCommands} />
          </Tab>
        </PropertiesPanel>
        <HistoryToolbar visible={false} />
        <ViewToolbar visible={true} />
        <MainToolbar visible={true}>
          <Command name="undo" />
          <Command name="redo" />
          <Command name="separator" />
          <Command name="fontName" />
          <Command name="fontSize" />
          <Command name="separator" />
          <Command name="bold" />
          <Command name="italic" />
          <Command name="underline" />
          <Command name="separator" />
          <Command name="fontColor" />
          <Command name="lineColor" />
          <Command name="fillColor" />
          <Command name="separator" />
          <Command name="clear" icon="clearsquare" text="Clear Diagram" />
          <Command name="export"/>
        </MainToolbar>
        {step_list.map((item, index) => {
          return <CustomShape  category="workflows" type={index} baseType={item.type} defaultText={item.text} allowEditText={false} key={index} />
        })}
        {/* <CustomShape category="workflows" type={`1`} baseType="rectangle"
         defaultText="step 1 test" allowEditText={false} key={1} />; */}
        {/* <Toolbox visibility="visible" showSearch={false} shapeIconsPerRow={4} width={220}>
          <Group category="general" title="General" shapes={['rectangle', 'diamond', 'ellipse']} />        
        </Toolbox> */}
        <Toolbox>
          <Group category="workflows" title="Work Flows" displayMode="texts" />
        </Toolbox>
      </Diagram>
      <button className="btn btn-dark my-2"onClick={() => this.exportStuff()}>test</button>
      </>
    );
  }
}

export default App;
          {/* <Group category="general" title="General" />
          <Group category="flowchart" title="Flowchart" expanded={true} /> */}