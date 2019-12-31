import React from 'react';
import './employee.css';

const employee = (props) => {
    return (
        <div className="card" key={props.data.id}>
            <div className="container">
                <h4 style={{ color: props.data.color }}><b>{props.data.name}</b></h4>
                <h5>{props.data.code}</h5>
                <p>{props.data.profession}</p>
                <p>{props.data.city}</p>
                <p>{props.data.branch}</p>
                <p>{props.data.assigned ? 'Assigned' : 'Not Assigned'}</p>
                <p>
                    <button className="btn-edit" title="Edit" onClick={() => props.openModal(props.data)} />
                    <button className="margin-left-5 btn-delete" title="Delete" />
                </p>
            </div>
        </div>
    );
}

export default employee;