import { STAFFS } from "../staffs";

function Salary() {
    return(
        <div className="row">
            {
                STAFFS.map(staff => 
                 <div className="staff_salary col-12 col-md-6 col-lg-4">
                    <h2>{staff.name}</h2>
                    <p>Mã nhân viên: {staff.id}</p>   
                    <p>Hệ số lương: {staff.salaryScale}</p>   
                    <p>Số giờ làm thêm: {staff.overTime}</p>   
                    <p>Lương: {staff.salaryScale*3000000 + staff.overTime*200000/8} </p>
                 </div>   
                    
                )
            }
        </div>
    )
}

export default Salary;