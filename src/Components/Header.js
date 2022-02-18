import { Link } from "react-router-dom";
import { DEPARTMENTS } from "../staffs";


function Header() {
    return (
        <nav className="nav">
            <Link to='/' className="nav-item"><i className="fa fa-user-circle" aria-hidden="true"> Nhân viên</i></Link>
            <Link to='/department' className="nav-item"><i className="fa fa-building" aria-hidden="true"> Phòng ban</i></Link>
            <Link to='/salary' className="nav-item"><i className="fa fa-credit-card" aria-hidden="true"> Bảng Lương</i></Link>
        </nav>
    )

}

export default Header;