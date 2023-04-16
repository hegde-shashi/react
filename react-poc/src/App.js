import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import AddEmployee from './components/AddEmployee';
import EmpById from './components/EmpById';

function App() {
  return (
    <div className='flex-cont'>
      <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<ListEmployeeComponents/>}></Route>
          <Route exact path='/add-emp' element={<AddEmployee/>}></Route>
          <Route exact path='/edit-emp/:empId' element={<AddEmployee/>}></Route>
          <Route exact path='/emp/:empid' element={<EmpById/>}></Route>
        </Routes>
      </div>
      <div className='foot'>
      <Footer/>
      </div>
      </Router>
    </div>
  );
}

export default App;
