import React, { Component } from 'react'
import CSVReader from 'react-csv-reader'
import DisplayTable from './DisplayTable.js'
// import ReactFileReader from 'react-file-reader';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            fileData: [],
            fetched: false
        };
    }
    // handleFiles = (files) => {
    //     console.log(files.fileList)
    //   }
    handleData = (data) =>{
        this.setState({
            fileData: data,
            fetched: true
        });
    }

    handleChange = (e) => {
        this.setState((prevState) => {
            var result = prevState.slice(1).forEach(function(row){
                if(row[3] == e.target.value){
                    return row
                }
            })
            return {fileData: result}
        });
    }

    render() {
        const validFiels = ["ID", "Client Name", "Amount", "Risk Category"];
        var valid = false;
        if(this.state.fileData[0]){
            valid = true;
            this.state.fileData[0].forEach(function(field, index){
                if(validFiels[index] != field){
                    valid = false;
                }
            });
            console.log(valid);
        }
        return (
            <div className="Input">
                <CSVReader onFileLoaded={this.handleData} />
                {valid ? 
                <DisplayTable data={this.state.fileData} />:
                this.state.fetched ?
                <div>The uploaded csv file is invalid</div>
                :
                <div />
                }
                <label htmlFor="items">Choose an item:</label>

                    <select id="items" onChange={this.handleChange}>
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>
                    </select>
            </div>
        );
    }
}

export default Input;