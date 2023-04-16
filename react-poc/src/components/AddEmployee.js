import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Data from "./EmpData";
import '../App.css'

function AddEmployee() {
  const [id, setid] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [salary, setsalary] = useState("");
  const [department, setdepartment] = useState("");
  const [grade, setgrade] = useState("");
  const {empId} = useParams();

  const navigate = useNavigate();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = {
      id,
      first_name,
      last_name,
      email,
      salary,
      department,
      grade,
    };

    if(empId){
      EmployeeService.updateEmployee(empId, employee).then((response) => {
        navigate('/')
      }).catch(err => {
        console.log(err)
      })
    }else{
      EmployeeService.saveEmployee(employee).then((Response) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    }  
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(empId).then((Response) => {
      setid(Response.data.id)
      setfirst_name(Response.data.first_name)
      setlast_name(Response.data.last_name)
      setemail(Response.data.email)
      setsalary(Response.data.salary)
      setdepartment(Response.data.department)
      setgrade(Response.data.grade)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const title = () => {
    if(empId) {
      return <h3 className="text-center mt-4 mb-5 emp">UPDATE EMPLOYEE</h3>
    }else{
      return <h3 className="text-center mt-4 mb-5 emp">ADD EMPLOYEE</h3>
    }
  }
  

  const addUpdate = () => {
    if(empId) {
      return <button className="btn btn-primary add" type="submit">
              Update
            </button>
    }else{
      return <button className="btn btn-primary add" type="submit">
              Add
            </button>
    }
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
        <div className="card col-md-7">
          {title()}
          <div className="card-body">
            <form onSubmit={(e) => saveOrUpdateEmployee(e)}>
              <div className="mb-5">
                <div className="d-flex justify-content-between">
                  <div className="form-group col-md-2 mb-4">
                    <label htmlFor="empId" className="mb-1">
                      ID
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="empId"
                      placeholder="Emp. ID"
                      name="id"
                      value={id}
                      onChange={(e) => setid(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="empFirstName" className="mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="empFirstName"
                      placeholder="Emp. first name"
                      name="first_name"
                      value={first_name}
                      onChange={(e) => setfirst_name(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="empLastName" className="mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="empLastName"
                      placeholder="Emp. last name"
                      name="Last_name"
                      value={last_name}
                      onChange={(e) => setlast_name(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between mb-4">
                <div className="form-group col-md-7">
                <label htmlFor="empMail" className="mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="empMail"
                  placeholder="Emp. email"
                  name="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                </div>

                <div className="form-group col-md-4">
                <label htmlFor="empSalary" className="mb-1">
                  Salary
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="empSalary"
                  placeholder="Emp. salary"
                  name="salary"
                  value={salary}
                  onChange={(e) => setsalary(e.target.value)}
                  required
                />
                </div>
                </div>

                <div className="d-flex justify-content-between">
                <div className="form-group col-md-4">
                <label htmlFor="empDepartment" className="mb-1">
                  Department
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="empDepartment"
                  name="department"
                  value={department}
                  onChange={(e) => setdepartment(e.target.value)}
                  required
                >
                  <option key="" value="" hidden disabled>
                    <span className="text-muted">
                      Employee department
                    </span>
                  </option>

                  {Data.emp_department.map((dpmt) => (
                    <option key={dpmt.value} value={dpmt.value}>
                      {dpmt.department}
                    </option>
                  ))}
                </select>
                </div>
                
                <div className="form-group col-md-7">
                <label htmlFor="empGrade" className="mb-1">
                  Grade
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="empGrade"
                  name="grade"
                  value={grade}
                  onChange={(e) => setgrade(e.target.value)}
                  required
                >
                  <option key="" value="" hidden disabled>
                    Employee grade
                  </option>

                  {Data.emp_grade.map((grd) => (
                    <option key={grd.value} value={grd.value}>
                      {grd.grade}
                    </option>
                  ))}
                </select>
                </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
              {addUpdate()}
              <Link className="btn btn-danger add" to='/'>
                Cancel
              </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddEmployee;
