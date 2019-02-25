import React, { Component } from 'react';

class TableBody extends Component {
    state = {
        data: []
    }
    dataProps = ["sl", "TaskName", "CreateDate", "StartDate", "EndDate", "Status"]
    editRowData = (rowData) => {

    }
    render() {
        const { tableData,isRowclickable, } = this.props;
        let classes = isRowclickable ? "cursor-hand" : "";
        return (
            <tbody>
                {tableData &&
                    tableData.map(rowData => <tr className={classes} key={rowData["sl"]} onClick={() => { this.editRowData(rowData)}}>
                        {
                            this.dataProps.map(propName => <td key={propName}>
                                { rowData[propName]}
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