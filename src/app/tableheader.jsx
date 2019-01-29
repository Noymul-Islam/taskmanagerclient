import React, { Component } from 'react';

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