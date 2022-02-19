import { STAFFS } from "../staffs";
import { useParams } from "react-router-dom";
import dateFormat from 'dateformat'; 


function FindStaffExpress() {
    const { userName }  = useParams();
    const staff = STAFFS.find(item => item.name.toString() === userName.toString())
    return(
       <div>
            <p>Họ và tên: {staff.name}</p>
            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
            <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban: {staff.department}</p>
            <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
            <p>Số ngày đã làm thêm: {staff.overTime}</p>
       </div>
    )
}

export default FindStaffExpress;