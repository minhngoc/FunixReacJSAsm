import { DEPARTMENTS } from "../staffs";


function Department() {
    return (
        <div className="row">
            {DEPARTMENTS.map(department => 
                <div className="col-12 col-md-6 col-lg-4">
                    <h4>{department.name}</h4>
                    <p>Số lượng nhân viên: {department.numberOfStaff}</p>
                </div>    
            )}
        </div>
    )
}

export default Department;