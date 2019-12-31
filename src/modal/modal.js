import React from 'react';
import './modal.css'

const modal = (props) => {
    let innerComponent = React.createElement(props.innerComponent,{...props.innerComponentData});
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={props.closeModal}>&times;</span>
                    <h2>Add/Edit Employee</h2>
                </div>
                <div className="modal-body">
                    {innerComponent}
                </div>
                <div className="modal-footer">
                    <button className="btn-save">Save</button>
                    <button className="btn-cancel" onClick={props.closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default modal;