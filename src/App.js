import StaffListComponent from './Components/StaffListComponent';
import './App.css';
import { useParams } from "react-router-dom";
import { Route, Link, Switch } from 'react-router-dom';
import StaffInformation from "./Components/StaffInformation";
import { STAFFS } from "./staffs";
import Header from "./Components/Header";
import Department from "./Components/Department";
import Footer from "./Components/Footer";
import Salary from "./Components/Salary";
import FindStaff from "./Components/FindStaff";
import FindStaffExpress from "./Components/FindStaffExpress";

function App() {

  return (
    <div style={{padding: 20}} className="App">
      <Header />
      <FindStaff />
      <Switch>
        <Route exact path='/' component={StaffListComponent} />
        <Route path='/staffs/:userName' component={FindStaffExpress} />
        <Route path='/staff/:id' component={StaffInformation}/>
        <Route path='/department' component={Department} />
        <Route path='/salary' component={Salary} />

        
      </Switch>
     
      <Footer />
    </div>
  );
}

export default App;
