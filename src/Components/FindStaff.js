import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { STAFFS } from '../staffs';

function FindStaff() {
    const [name, setName] = useState('')

    const staffNames = STAFFS.find(staffName => staffName.name === name)

    const handleClick = () => {

        if(name === ''){
            alert('Vui lòng nhập họ tên.')
        }else if(name !== staffNames) {
            alert('Họ tên chưa chính xác.')
        }
        setName('')
    }
    
    return(
        
        <div className="finding">
            <input value={name} onChange={event => setName(event.target.value)} placeholder="Nhập tên nhân viên" />
            
            {staffNames !== undefined ? <Link to={`/staffs/${name}`}><button className="button">Tìm kiếm</button></Link> : <button onClick={handleClick} className="button">Tìm kiếm</button>}
        </div>
    )
}

export default FindStaff;