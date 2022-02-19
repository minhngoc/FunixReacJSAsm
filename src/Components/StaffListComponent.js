import { Fragment, useCallback } from 'react';
import { DEPARTMENTS, STAFFS } from '../staffs'
import { useState } from 'react';
import dateFormat from 'dateformat'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function StaffListComponent() {

    const [click, setClick] = useState('')

    // const [department, setDepartment] = useState(false)
    

    const HandleClick = (staff) => {
       
        setClick( 
            <div>
                <p>Họ và tên: {staff.name}</p>
                <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                <p>Phòng ban: {staff.department}</p>
                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </div>        
   )}

    return (
    <div className='container'>
        <div className='row staffList'>
            <h2>Danh sách nhân viên</h2>
            {STAFFS.map((staff) => 
                <div key={staff.id} className='col-6 col-md-4 col-lg-2'>
                    <Link to={`/staff/${staff.id}`}>
                        <div>
                        <img src={staff.image} onClick={() => HandleClick(staff)} />
                        </div>
                    </Link>
                    <p key={staff.id} >{staff.name}</p>
                </div>
            )}
        </div>

        
    </div>
    )
}
//template string
export default StaffListComponent;