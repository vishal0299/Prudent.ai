import React, { Component } from 'react'
import CSVReader from 'react-csv-reader'
// import ReactFileReader from 'react-file-reader';

class Input extends Component {
    
    // handleFiles = (files) => {
    //     console.log(files.fileList)
    //   }
    handleData = (data) =>{
        console.dir(data[0]);
    }

    render() {
        return (
            <div className="Input">
                <CSVReader onFileLoaded={this.handleData} />
            </div>
        );
    }
}

export default Input;