import React from 'react';
import ReactGoogleSheets from 'react-google-sheets';
// import  Xlsx, {} from  "xlsx";

 
class DataComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sheetLoaded: false,
    }
  }
  render() {
    return (
      <>

      </>
    )
  }
}
 
export default ReactGoogleSheets.connect(DataComponent);

