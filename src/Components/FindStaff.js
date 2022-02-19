import { useState } from 'react'
import { Link } from 'react-router-dom';

function FindStaff() {
    const [name, setName] = useState('')

    const handleClick = () => (
        setName()
        
    )
    return(
        <div className="finding">
            <input onChange={event => setName(event.target.value)} placeholder="Nhập tên nhân viên" />
            
            <Link to={`/staff/${setName()}`}><button onClick={handleClick} className="button">Tìm kiếm</button></Link>
        </div>
    )
}

export default FindStaff;