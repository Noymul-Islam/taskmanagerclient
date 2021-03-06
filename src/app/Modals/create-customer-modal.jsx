import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';
import language from '../assets/languageFile.json';
import { FormGroup, FormControl } from 'react-bootstrap';
import Input from '../Common/Input';
class CreateCustomerModal extends Component {
    state = {
        data: {

        }

    }
    closeModal = () => {
        const { onCloseModalEvent,onEditModalClose } = this.props;
        // this.setState({});
        onCloseModalEvent();
        onEditModalClose();
    }

    setStatusAndCreateDate = () => {
        const Status = 'Pending';
        const CreateDate = new Date().toISOString();
        const { data } = this.state;
        data['Status'] = Status;
        data['CreateDate'] = CreateDate;
        this.setState({ data });
    }
    setSerialNumber = () => {
        let { data } = this.state;
        let latest = JSON.parse(localStorage.getItem("latestSerial"));
        if (!latest) {
            localStorage.setItem("latestSerial", JSON.stringify(1))
        }
        else {
            latest = latest + 1;
            localStorage.setItem("latestSerial", JSON.stringify(latest));
            data['sl'] = latest;
            this.setState({ data });

        }
    }
    createTask = () => {
        const { onSaveDataEvent } = this.props;
        this.setStatusAndCreateDate();
        this.setSerialNumber();
        const dummyData = this.state.data;
        console.log(dummyData);
        this.setState({ data: [] })
        onSaveDataEvent(dummyData, false);

    }

    onChange = ({ currentTarget: input }) => {

        const data = { ...this.props.data }
        debugger;
        data[input.name] = input.value;
        this.setState({ data });


    }
    setEditDataInInputFields = (editRow,data) => {
          data['TaskName'] = editRow['TaskName'];
          data['StartDate'] = editRow['StartDate'];
          data['EndDate'] = editRow['EndDate'];

    }
    render() {
        const { isVisible, editRow,onEditModalClose,data } = this.props;
        // const { data } = this.state;
        if (editRow['TaskName']) {
            this.setEditDataInInputFields(editRow,data);
        }

        return (
            <div>
                <Modal visible={isVisible} onClickBackdrop={()=>{this.closeModal()}}>
                    <div className="modal-header">
                        <h5 className="modal-title">{language.CREATE_NEW_CUSTOMER}!</h5>
                    </div>
                    <div className="modal-body">
                        <div>
                            <form>
                                <Input name="TaskName" label="Add task name" type="text" value={data['TaskName'] || ''} onChange={this.onChange} />
                                <Input name="StartDate" label="Start date" type="date" value={data['StartDate'] || ''} onChange={this.onChange} />
                                <Input name="EndDate" label="End date" type="date" value={data['EndDate'] || ''} onChange={this.onChange} />
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