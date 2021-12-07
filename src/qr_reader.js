import React, { Component } from "react";
import QrReader from 'react-qr-reader'
import { AuthType, createClient } from "webdav";


class QReader extends Component {
    
    constructor(props){
        super(props)
        this.state = {
          delay: 500,
          result: 'No result',
        }
    
        this.handleScan = this.handleScan.bind(this)
        // this.openImageDialog = this.openImageDialog.bind(this)

      }
      handleScan(result){
        if(result){
          this.setState({ result })
        }
      }
      handleError(err){
        console.error(err)
      }

      // openImageDialog() {
      //   this.refs.qrReader1.openImageDialog()
      // }

      async test(){
        // await client.getDirectoryContents("/").then((val)=>{
        //    console.log(val);
        // });
      }

      render(){
        const previewStyle = {
          height: "300px",
          width: "300px",
          margin: "auto"
        }
    
        return(
          <div className="row mt-2">
            <div className="col-12 m-2 text-center">
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
              />
            </div>

            {/* <div className="col-12 m-2" style={{fontSize: "calc(10px + 2vmin)"}}>
               <input type="button" value="Submit QR Code" onClick={this.openImageDialog} />
            </div> */}

            <div className="col-12 m-2 text-center" style={{fontSize: "calc(10px + 2vmin)"}}>
                <p>{this.state.result}</p>
            </div>

          </div>
        )
      }
}
export default QReader


  