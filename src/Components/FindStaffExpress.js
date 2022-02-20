import { STAFFS } from "../staffs";
import { useParams } from "react-router-dom";
import dateFormat from 'dateformat'; 


function FindStaffExpress() {
    const { userName }  = useParams();

    const staff = STAFFS.filter(items => items.name === userName.replace('%20', ' '))
    console.log(staff)
    return(
       <div className='row'>
            {staff.map(item =>
            <div key={item.id} className='row col-12 col-md-6 col-lg-6 a'>
                <img className='col-12 col-md-4 col-lg-3' src={item.image} />
                <div className='content col-12 col-md-8 col-lg-9'>
                    <p>Họ và tên: {item.name}</p>
                    <p>Ngày sinh: {dateFormat(item.doB, "dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(item.startDate, "dd/mm/yyyy")}</p>
                    <p>Phòng ban: {item.department}</p>
                    <p>Số ngày nghỉ còn lại: {item.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {item.overTime}</p>
                </div>

            </div>     
                
            )}
       </div>
    )
}

export default FindStaffExpress;