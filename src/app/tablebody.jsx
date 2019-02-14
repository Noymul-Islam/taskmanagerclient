import React, { Component } from 'react';

class TableBody extends Component {
    state = {
        data: []
    }

    render() {
        const { tableData } = this.props;
        debugger;
        return (
            <tbody>
                {  tableData &&
                    tableData.map(rowData => <tr>
                         {
                             rowData.map(columnData => <td>
                                   test
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