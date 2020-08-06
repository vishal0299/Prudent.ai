import React, { Component } from 'react'
import CSVReader from 'react-csv-reader'
import DisplayTable from './DisplayTable.js'
// import ReactFileReader from 'react-file-reader';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            actual:[],
            fileData: [],
            fetched: false,
            option: ""
        };
    }
    // handleFiles = (files) => {
    //     console.log(files.fileList)
    //   }
    handleData = (data) =>{
        console.log(data)
        this.setState({
            actual: data,
            fileData: data,
            fetched: true
        });

    }


    // filterr = (arr, key) => {
    //     var newarray = [] 
    //     for(let i in arr){
    //         console.log("now");     
    //         console.log(i[3] === key);
    //        if(i[3] === key) 
    //            newarray.push(i)
    //     }
    //     return newarray
    //   }

    handleChange = (e) => {
        let risk = e.target.value
        this.setState({option: risk})
        this.setState((prevState) => {  
            if(prevState.option === ""){
                return {fileData: prevState.actual}
            }
            else {
                let newarray = []
                prevState.actual.forEach(row => {
                    if(row[3] === prevState.option){
                        newarray.push(row)
                    }
                })
                console.log(newarray)
                return {fileData: newarray}
            }
        });
    }

    render() {
        const validFiels = ["ID", "Client Name", "Amount", "Risk Category"];
        const validDatatype=[/^[0-9]+$/,/^[A-Za-z ]+$/,/^[$0-9,.]+$/,/^[A-Za-z]+$/];
        var valid = false;
        if(this.state.actual[0]){
            valid = true;
            this.state.actual[0].forEach(function(field, index){
                if(validFiels[index] !== field){
                    valid = false;
                }
            });
            this.state.actual.slice(1).forEach(function(row){
                console.log(row);
                row.forEach(function(field, index){
                    console.log(field, index)
                    if(!validDatatype[index].test(field[index])){
                        valid = false
                    }
                })
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
                <label htmlFor="items">Risk:</label>

                    <select id="items" value={this.state.option} onChange={this.handleChange}>
                    <option value="">All</option>
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>
                    </select>
            </div>
        );
    }
}

export default Input;