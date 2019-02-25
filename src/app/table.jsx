import React, { Component } from 'react';
import TableHeader from './tableheader';
import TableBody from './tablebody';

class Table extends Component {

    render() {

        const { headerColumn, tableData,isRowclickable,setRowDataToUpdate } = this.props;
        return (
            <table className="table table-sm" >
                <TableHeader headerColumn={headerColumn} />
                <TableBody tableData ={tableData} isRowclickable = {isRowclickable} setRowDataToUpdate={setRowDataToUpdate}/>
            </table >
        )
    }


}

export default Table;