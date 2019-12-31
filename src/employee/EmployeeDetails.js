import React, { Component } from 'react';
import './employee.css'

class EmployeeDetails extends Component {
    state = {
        name: "",
        code: "",
        profession: "",
        color: "#FF6600",
        city: "",
        branch: "",
        assigned: false
    }

    componentWillReceiveProps() {
        debugger;
        console.log(this.props.id);
        this.setState({ ...this.props });
    }

    genericStateUpdate = (event) => {
        let newState = { ...this.state }
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <form className="flex-center">
                <p>
                    Name :
                    <input type="text" id="txtName" name="name" value={this.state.name} onChange={this.genericStateUpdate} required />
                </p>
                <p>
                    Code :
                    <input type="text" id="txtCode" name="code" value={this.state.code} onChange={this.genericStateUpdate} />
                </p>
                <p>
                    Profession :
                    <select id="ddlProfession" name="profession" value={this.state.profession} onChange={this.genericStateUpdate}>
                        <option>Test</option>
                    </select>
                </p>
                <p>
                    Color :
                    <input type="color" id="txtName" name="color" value={this.state.color} onChange={this.genericStateUpdate} />
                </p>
                <p>
                    City :
                    <select id="ddlCity" name="city" value={this.state.city} onChange={this.genericStateUpdate}>
                        <option>Test</option>
                    </select>
                </p>
                <p>
                    Branch :
                    <select id="ddlBranch" name="branch" value={this.state.branch} onChange={this.genericStateUpdate}>
                        <option>Test</option>
                    </select>
                </p>
                <p>
                    Assigned :
                    <input type="checkbox" id="chkAssigned" name="assigned" checked={this.state.assigned} onChange={this.genericStateUpdate} />
                </p>
            </form>
        );
    }
}

export default EmployeeDetails;