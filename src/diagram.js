import React, {Component} from 'react';
import Diagram, { ContextMenu, ContextToolbox, PropertiesPanel, Group, Tab, HistoryToolbar, ViewToolbar, MainToolbar, Command, Toolbox, CustomShape,   Nodes,Edges, AutoLayout, Editing } from 'devextreme-react/diagram';
import { confirm } from 'devextreme/ui/dialog';
import 'whatwg-fetch';

const pageCommands = ['pageSize', 'pageOrientation', 'pageColor'];
const menuCommands = ['bringToFront', 'sendToBack', 'lock', 'unlock'];

function itemLockedExpr(obj, value) {
  console.log(obj);
  return obj.type === "text" ? "true" : "false";
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step_list: [
        {text: "Step Flow 1 ", id: 1, type: "rectangle"},
        {text: "Step Flow 2 ", id: 2, type: "diamond"},
        {text: "Step Flow 3 ", id: 3, type: "ellipse"},
      ],
      data_test:{
        shapes:[
          {
            height: 720,
            key: "107",
            text: "A new ticket",
            type: "terminator",
            width: 1440,
            x: 1440,
            y: 1080,
            zIndex: 0,
          },
          {
            height: 1080,
            key: "108",
            text: "Analyze\nthe issue",
            type: "process",
            width: 2520,
            x: 1000,
            y: 2340,
            zIndex: 0,
          }
        ],
        page:{
          gridSize: 180,
          height: 11907,
          pageHeight: 11906,
          pageLandscape: false,
          pageWidth: 8391,
          snapToGrid: true,
          width: 8391,
        },
        connectors: [
          {
          beginConnectionPointIndex: 2,
          beginItemKey: "107",
          endConnectionPointIndex: 0,
          endItemKey: "108",
          key: "116",
          points: [
            {x: 2160,y: 1800},
            {x: 2160,y: 2340}
          ],
          zIndex: 0,
          }
        ]

      },
      flowNodes: [
        {
          id: 107,
          text: "A new ticket",
          type: "terminator",
        },
        {
          id: 108,
          text: "Analyze the issue",
          type: "process"
        },
        {
          id: 118,
          text: "Do we have all information to work with?",
          type: "diamond"
        },
        {
          id: 120,
          text: "Answered",
          type: "terminator"
        },
        {
          id: 121,
          text: "Request additional information or clarify the scenario",
          type: "rectangle"
        },
        {
          id: 125,
          text: "Prepare an example in Code Central",
          type: "rectangle"
        },
        {
          id: 127,
          text: "Update the documentation",
          type: "rectangle"
        },
        {
          id: 131,
          text: "Process the ticket",
          type: "rectangle"
        },
        {
          id: 133,
          text: "Work with the R&D team",
          type: "rectangle"
        }
      ],
      flowEdges: [
        {
          fromId: 107,
          id: 116,
          text: null,
          toId: 108
        },
        {
          fromId: 108,
          id: 117,
          text: null,
          toId: 118
        },
        {
          fromId: 118,
          id: 122,
          text: "No",
          toId: 121
        },
        {
          fromId: 121,
          id: 123,
          text: null,
          toId: 108
        },
        {
          fromId: 131,
          id: 124,
          text: null,
          toId: 120
        },
        {
          fromId: 120,
          id: 126,
          text: "",
          toId: 125
        },
        {
          fromId: 120,
          id: 130,
          text: "",
          toId: 127
        },
        {
          fromId: 118,
          id: 132,
          text: "Yes",
          toId: 131
        },
        {
          fromId: 131,
          id: 134,
          text: "Need developer assistance?",
          toId: 133
        },
        {
          fromId: 133,
          id: 135,
          text: null,
          toId: 120
        }
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
    // var diagram = this.diagramRef.current.instance;
    // diagram.import(JSON.stringify(this.state.data_test))

    // fetch('https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/diagram-flow.json')
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(json) {
    //     console.log(json);
    //     // diagram.import(JSON.stringify(json));
    //   })
    //   .catch(function() {
    //     throw 'Data Loading Error';
    //   });
  }

  onContentReady(e) {
    var diagram = e.component;
    // preselect some shape
    var items = diagram.getItems().filter(function (item) {
      return item.itemType === "shape" && item.text === "Greta Sims";
    });
    if (items.length > 0) {
      diagram.setSelectedItems(items);
      diagram.scrollToItem(items[0]);
      diagram.focus();
    }
  }

  onSelectionChanged({ items }) {
    console.log(items);
    // var selectedItemNames = "Nobody has been selected";
    // items = items
    //   .filter(function (item) {
    //     return item.itemType === "shape";
    //   })
    //   .map(function (item) {
    //     return item.text;
    //   });
    // if (items.length > 0) {
    //   selectedItemNames = items.join(", ");
    // }
    // this.setState({
    //   selectedItemNames
    // });
  }



  exportStuff(){
    // this.diagramRef.current.export();
    var export_data = this.diagramRef.current.instance.export();
    console.log(export_data);
  }

  render() {
    const {step_list} = this.state;
    return (
      <>
      <Diagram id="diagram" 
          ref={this.diagramRef} 
          onCustomCommand={this.onCustomCommand} 
          snapToGrid={true}
          // readOnly={true}
          onContentReady={this.onContentReady}
          onSelectionChanged={this.onSelectionChanged}
          >
        <ContextMenu enabled={true} commands={menuCommands}  />
        <Editing
          allowChangeShapeText={false}
        />
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

        <Nodes
          dataSource={this.state.flowNodes}
          idExpr="id"
          typeExpr="type"
          textExpr="text"
          // lockedExpr={itemLockedExpr}
          
        >
          <AutoLayout type="layered" />
        </Nodes>
        <Edges
          dataSource={this.state.flowEdges}
          idExpr="id"
          textExpr="text"
          fromExpr="fromId"
          toExpr="toId"
        />



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