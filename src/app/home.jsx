import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import CreateCustomerModal from './Modals/create-customer-modal';
import Table from './table';
import language from './assets/languageFile.json'
class Home extends Component {
    state = {
        "headerColumn": this.getHeaderColumn(),
        "tableData": [],
        "openCreateModal": false
    };


    getHeaderColumn() {
        const headerColumn = [{ prop: 'sl', label: '#' },
        { prop: 'Name', label: 'Name' },
        { prop: 'CreateDate', label: 'Create Date' },
        { prop: 'StartDate', label: 'Start Date' },
        { prop: 'EndDate', label: 'End Date' },
        { prop: 'Staus', label: 'Status' }
        ]
        return headerColumn;


    }
    saveTask = (tableData,openCreateModal) => {
        console.log("Created new task");
        this.setState({tableData,openCreateModal});
    }
    addNewTask = ()=> {
        this.setState({"openCreateModal" : true});
    }
    closeModal= ()=>{
        this.setState({"openCreateModal": false});
    }

    render() {
        const { headerColumn, tableData,openCreateModal } = this.state;
        return (
            <React.Fragment>

                <div className="card">
                    <div className="card-header">

                        <button type="button" className="btn btn-outline-secondary float-right" onClick={this.addNewTask} >{language.ADD_NEW_TASK}</button>
                    </div>
                    <div className="card-body">
                        {
                            tableData && tableData.length > 0 &&
                            <Table headerColumn={headerColumn} data={tableData} />

                        }
                        {
                            tableData.length === 0 &&
                            <p className="text-center font-size-24">
                                {language.NO_TASK_ADDED_YET}
                            </p>
                        }
                    </div>
                </div>
                <CreateCustomerModal  isVisible={openCreateModal} onSaveDataEvent={this.saveTask}
                onCloseModalEvent = {this.closeModal}
                />
            </React.Fragment>
        );
    }

}

export default Home;