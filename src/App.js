import React from 'react';
import Employee from './employee/employee';
import Modal from './modal/modal';
import './App.css';
import EmployeeDetails from './employee/EmployeeDetails';

class App extends React.Component {
  state = {
    employees: [],
    innerComponentData:{}
  }

  componentWillMount = () => {
    fetch('http://localhost:8080/api/employees')
      .then(response => response.json())
      .then(employees => this.setState({ employees }))
  }

  openModal = (data) => {
    debugger;
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
    let newState = {...this.state};
    newState["innerComponentData"] = data;
    this.setState(newState);
  }

  closeModal = () =>{
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  render() {
    const {
      employees
    } = this.state;

    return (
      <div className="App">
        <h1>Plexxis Employees</h1>
        <button onClick={this.openModal}>Add</button>
        <div className="flex-row">
          {
            employees.map((employee, index) => (
              <Employee data={employee} key={index} openModal={this.openModal}/>
              // <div key={employee.id}>
              //   {
              //     Object.keys(employee).map(key =>
              //       <span key={key}>
              //         {key}:
              //         {employee[key]}
              //       </span>
              //     )
              //   }
              // </div>
            ))
          }
        </div>
        <Modal closeModal={this.closeModal} innerComponent={EmployeeDetails} innerComponentData={this.state.innerComponentData}></Modal>
      </div>
    );
  }
}

export default App;
