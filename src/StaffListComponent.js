import { Fragment, useCallback } from 'react';
import { DEPARTMENTS, STAFFS } from './staffs'
import { useState } from 'react';
import dateFormat from 'dateformat'; 
import 'bootstrap/dist/css/bootstrap.css';


function StaffListComponent() {

    const [click, setClick] = useState('')

    const [department, setDepartment] = useState(false)
    

    const HandleClick = (Staff) => {
       
        setClick( 
            <div>
                <p>Họ và tên: {Staff.name}</p>
                <p>Ngày sinh: {dateFormat(Staff.doB, "dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(Staff.startDate, "dd/mm/yyyy")}</p>
                <p>Phòng ban: {Staff.department}</p>
                <p>Số ngày nghỉ còn lại: {Staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {Staff.overTime}</p>
            </div>        
   )}

   const handleDepartment = () => {
      setDepartment(() => 
        
        <ul>{
          DEPARTMENTS.map(Department => 
                <li>{Department.name}</li>
          )}
        </ul>
        )
        
   }
 

    return (
    <div className='container'>
        <div className='row staffList'>
            <h2>Danh sách nhân viên</h2>
            {STAFFS.map((Staff) => 
                <p className='col-xs-12 col-md-6 col-lg-4' key={Staff.id} onClick={() => HandleClick(Staff)}>{Staff.name}</p>
            )}
        </div>
        <div className='main row'>
            <div className='col-xs-6 col-md-6 col-lg-6'>
                <button onClick={handleDepartment} className='button'>Danh sách phòng ban</button>
                <p className='department'>{department}</p>
            </div>
            
            <p className='content col-xs-6 col-md-6 col-lg-6'>
                {click || 'Bấm vào tên nhân viên để xem thông tin'}
            </p>

        </div>
    </div>
    )
}

export default StaffListComponent;