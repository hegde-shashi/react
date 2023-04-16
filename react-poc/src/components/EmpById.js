import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useParams } from 'react-router-dom'
import { RiPencilFill, RiDeleteBin6Fill } from "react-icons/ri";
import '../App.css'

function EmpById() {
    const [employees, setEmployees] = useState([])

    const {empid} = useParams();
    console.log(empid)

    

    const getAllEmployees = () =>

          EmployeeService.getEmployeeById(empid).then((response)=>{
            setEmployees(response.data)
            console.log(response.data)
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
                        <tr key={employees.id}>
                            <td>
                                {employees.id}
                            </td>
                            <td>
                                {employees.first_name}
                            </td>
                            <td>
                                {employees.last_name}
                            </td>
                            <td>
                                {employees.email}
                            </td>
                            <td>
                                {employees.salary}
                            </td>
                            <td>
                                {employees.department}
                            </td>
                            <td>
                                {employees.grade}
                            </td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-emp/${employees.id}`}>
                                    <RiPencilFill/>
                                </Link>
                                <button className='btn btn-danger dlt' onClick={() => deleteEmployee(employees.id)}>
                                    <RiDeleteBin6Fill/>
                                </button>
                            </td>
                        </tr>
 
            </tbody>
        </table>
        <div className='text-center mt-4'>
        <Link to='/' className='btn btn-light' >
            Return to home 
        </Link>
        </div>
    </div>
  )
}

export default EmpById