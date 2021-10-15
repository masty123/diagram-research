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
      {/* <div className="class_iframe">
          <iframe 
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQpVKQbB3ixW4oSTfu0P5MWtUBQow0N03ICQZ-DSRTK6uDvGp9ETb3HuN0He5KJx-M460GBW_s2dPkR/pubhtml?widget=true&amp;headers=false"
              frameborder="0" 
              // style={{
              //   overflow: "hidden",
              //   height: "100%",
              //   width: "100%"
              // }}
              height="100%" 
              width="100%"
          />
      </div> */}
      </>
    )
  }
}
 
export default ReactGoogleSheets.connect(DataComponent);

//<ReactGoogleSheets 
// clientId={CLIENT_ID}
// apiKey={API_KEY}
// spreadsheetId={SPREADSHEET_ID}
// afterLoading={() => this.setState({sheetLoaded: true})}
// >
// {this.state.sheetLoaded ? 
//   <div>
//     {/* Access Data */}
//     {console.log('Your sheet data : ', this.props.getSheetsData({YOUR_SPREADSHEET_NAME}))}
//     {/* Update Data */}
//     <button onClick={() => {
//       this.props.updateCell(
//         'sheet02', // sheetName
//         'E', // column
//         13, // row
//         'Apple', // value
//         null, // successCallback
//         (error) => {
//           console.log('error', error)
//         } // errorCallback
//       );
//     }}>update cell!</button>
//   </div>
//   :
//   'loading...'
// }
// </ReactGoogleSheets>