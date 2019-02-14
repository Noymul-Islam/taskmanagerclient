import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';
import language from '../assets/languageFile.json';
import { FormGroup, FormControl } from 'react-bootstrap';
import Input from '../Common/Input';
class CreateCustomerModal extends Component {
    state = {
        data: {
            "TaskName": "",
            "CreateDate": "",
            "StartDate": "",
            "EndDate": "",
            "Status": ""

        }

    }
    clearedState = {
        "TaskName": "",
        "CreateDate": "",
        "StartDate": "",
        "EndDate": "",
        "Status": ""

    }
    closeModal = () => {
        const { onCloseModalEvent } = this.props;
        this.setState({});
        onCloseModalEvent();
    }

    setStatusAndCreateDate = ()=>{
        const Status = 'Pending';
        const CreateDate = new Date().toISOString();
        const {data} = this.state;
        data['Status'] = Status;
        data['CreateDate'] = CreateDate;
        this.setState({data});
    }
    createTask = () => {
        const { onSaveDataEvent } = this.props;
        this.setStatusAndCreateDate();
        const dummyData = this.state.data;
        console.log(dummyData);
        onSaveDataEvent(dummyData, false);

    }

    onChange = ({ currentTarget: input }) => {

        const data = { ...this.state.data }
        data[input.name] = input.value;
        this.setState({ data });


    }

    render() {
        const { isVisible } = this.props;
        const {data}  = this.state;

        return (
            <div>
                <Modal visible={isVisible} onClickBackdrop={this.closeModal}>
                    <div className="modal-header">
                        <h5 className="modal-title">{language.CREATE_NEW_CUSTOMER}!</h5>
                    </div>
                    <div className="modal-body">
                        <div>
                            <form>
                                <Input name="TaskName" label="Add task name" type="text" value={data['TaskName']} onChange={this.onChange} />
                                <Input name="StartDate" label="Start date" type="date" value={data['StartDate']}  onChange={this.onChange} />
                                <Input name="EndDate" label="End date" type="date" value={data['EndDate']}  onChange={this.onChange} />
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.closeModal}>
                            {language.CANCEL}
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={this.createTask}>
                            {language.CREATE}
                        </button>

                    </div>
                </Modal>

            </div>
        );
    }


}

export default CreateCustomerModal;