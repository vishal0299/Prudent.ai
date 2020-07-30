import React, { Component } from 'react'
import { Table } from 'semantic-ui-react';

class DisplayTable extends Component {
    render() {
        const resultTableRows = this.props.data.map(row => (
            <Table.Row key={row[0]}>
				<Table.Cell>{row[0]}</Table.Cell>
		        <Table.Cell>{row[1]}</Table.Cell>
		        <Table.Cell>{row[2]}</Table.Cell>
		        <Table.Cell>{row[3]}</Table.Cell>
		    </Table.Row>
        ));
        return(
            <div>
                <Table>
                <Table.Body>
                    {resultTableRows}
                </Table.Body>
                </Table>
            </div>
        );
    }
}

export default DisplayTable;