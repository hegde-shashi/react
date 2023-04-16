import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'
import { RiPencilFill, RiDeleteBin6Fill } from "react-icons/ri";
import '../App.css'

function ListEmployeeComponents() {
    const [employees, setEmployees] = useState([])

    

    const getAllEmployees = () => 

          EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data.map(emp => emp.first_name))
          }).catch(error => {
            console.log(error);
          })

    useEffect(() => {
    
        getAllEmployees()
  
      }, [])

    const deleteEmployee = (employeeId) => {
        if (window.confirm('Are you sure want to delete employee '+ employeeId + '?')){
            EmployeeService.deleteEmployee(employeeId).then((response)=>{
                getAllEmployees()
            }).catch(err => {
                console.log(err)
            })
        }
        
    }


  return (
    <div className='container'>
        <h2 className='text-center m-4 emp'>EMPLOYEE LIST</h2>
        <Link to='/add-emp' className='btn btn-primary mb-4 float-end'>Add employee</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                <th>
                    ID
                </th>
                <th>
                    First Name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Salary
                </th>
                <th>
                    Department
                </th>
                <th>
                    Grade
                </th>
                <th>
                    Action
                </th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee => 
                        <tr key={employee.id}>
                            <td>
                                {employee.id}
                            </td>
                            <td>
                                {employee.first_name}
                            </td>
                            <td>
                                {employee.last_name}
                            </td>
                            <td>
                                {employee.email}
                            </td>
                            <td>
                                {employee.salary}
                            </td>
                            <td>
                                {employee.department}
                            </td>
                            <td>
                                {employee.grade}
                            </td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-emp/${employee.id}`}>
                                    <RiPencilFill/>
                                </Link>
                                <button className='btn btn-danger dlt' onClick={() => deleteEmployee(employee.id)}>
                                    <RiDeleteBin6Fill/>
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
  )
}

export default ListEmployeeComponents