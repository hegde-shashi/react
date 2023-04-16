import axios from "axios";

const EMPLOYEE_API_URL = 'http://localhost:8080/api/employee';

class EmployeeService {

    getAllEmployees(){
        return axios.get(EMPLOYEE_API_URL)
    }

    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_URL+'/'+'save', employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_URL+'/'+employeeId)
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_API_URL+'/'+employeeId, employee)
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_URL+'/'+employeeId)
    }
}

export default new EmployeeService();