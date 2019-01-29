import React, { Component } from 'react';

class Input extends Component {


    render() {
        const {name,label,type,onChange,value} = this.props;
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input
                    autoFocus
                    id={name}
                    name={name}
                    type= {type}
                    value= {value}
                    onChange = {(event)=>{ onChange(event);}}
                    className="form-control"
                >
                </input>

            </div>

        );
    }

}
export default Input;