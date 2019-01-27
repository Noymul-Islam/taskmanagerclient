import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import TableHeader from './tableheader';
class Home extends Component {
    state = {};
    headerColumn = [{ prop: 'sl', label: '#' },
    { prop: 'Name', label: 'Name' },
    { prop: 'CreateDate', label: 'Create Date' },
    { prop: 'StartDate', label: 'Start Date' },
    { prop: 'EndDate', label: 'End Date' },
    { prop: 'Staus', label: 'Status' }
    ]

    render() {
        return (
            <table className="table table-sm">
                <TableHeader headerColumn={this.headerColumn} />

            </table>
        );
    }



}

export default Home;