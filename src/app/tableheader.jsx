import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';

class TableHeader extends Component {
 
    state = {};

    render(){
        const {headerColumn} = this.props;
        return (
            <thead>
                <tr key={1}>
                    {
                        headerColumn.map(column=> <th key={column.prop}>
                            {column.label}
                        </th>)
                    }
                </tr>
            </thead>
        );
    }

}
export default TableHeader;