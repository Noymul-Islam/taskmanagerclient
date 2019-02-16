import React, { Component } from 'react';

class TableBody extends Component {
    state = {
        data: []
    }
   dataProps = ["sl","TaskName","CreateDate","StartDate","EndDate","Status"] 
    render() {
        const { tableData } = this.props;
        return (
            <tbody>
                {  tableData &&
                    tableData.map(rowData => <tr key = {rowData["sl"]}>
                         {
                             this.dataProps.map(propName => <td key = {propName}>
                                   {rowData[propName]}
                             </td>)
                         }
                    </tr>)

                }
                {/* <tr key={1}>
                    {
                        headerColumn.map(column => <th key={column.prop}>
                            {column.label}
                        </th>)
                    }
                </tr> */}

            </tbody>
        );
    }

}

export default TableBody;