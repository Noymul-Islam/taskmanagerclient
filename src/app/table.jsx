import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import TableHeader from './tableheader';


class Table extends Component {

    render() {

        const { headerColumn, tableData } = this.props;
        return (
            <table className="table table-sm" >
                <TableHeader headerColumn={headerColumn} />
            </table >
        )
    }


}

export default Table;