import { STAFFS } from "../staffs";
import { useParams } from "react-router-dom";
import dateFormat from 'dateformat'; 


function FindStaffExpress() {
    const { userName }  = useParams();
    
    const staff = STAFFS.find(item => item.name.toString() === userName.replace('%20', ' '))
    return(
       <div>
            {staff && <div key={staff.id} className='row'>
                <img className='col-12 col-md-4 col-lg-3' src={staff.image} />
                <div className='content col-12 col-md-8 col-lg-9'>
                    <p>Họ và tên: {staff.name}</p>
                    <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                    <p>Phòng ban: {staff.department}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                </div>

            </div>}
       </div>
    )
}

export default FindStaffExpress;