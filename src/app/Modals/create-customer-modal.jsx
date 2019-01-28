import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';
import language from '../assets/languageFile.json'
class CreateCustomerModal extends Component {

    closeModal= ()=>{
        const {onCloseModalEvent} = this.props;
        onCloseModalEvent();
    }

    createTask = ()=>{
       const {onSaveDataEvent} = this.props;
       const dummyData = [];
       onSaveDataEvent(dummyData,false);

    }
    render() {
        const { isVisible } = this.props;

        return (
            <div>
                <Modal visible={isVisible} onClickBackdrop={this.closeModal}>
                    <div className="modal-header">
                        <h5 className="modal-title">{language.CREATE_NEW_CUSTOMER}!</h5>
                    </div>
                    <div className="modal-body">
                        <p>Enemy vessel approaching!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={this.createTask}>
                            {language.CREATE}
                        </button>
                        <button type="button" className="btn btn-primary" onClick={this.closeModal}>
                          {language.CANCEL}                            
                        </button>
                    </div>
                </Modal>

            </div>
        );
    }


}

export default CreateCustomerModal;