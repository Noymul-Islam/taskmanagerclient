import React, { Component } from 'react';
import TableHeader from './tableheader';
import TableBody from './tablebody';

class Table extends Component {

    render() {

        const { headerColumn, tableData } = this.props;
        return (
            <table className="table table-sm" >
                <TableHeader headerColumn={headerColumn} />
                <TableBody tableData ={tableData}/>
            </table >
        )
    }


}

export default Table;