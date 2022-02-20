import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { STAFFS } from '../staffs';

function FindStaff() {
    const [name, setName] = useState('')
    const inputEl = useRef(null);
    const staffNames = STAFFS.find(staffName => staffName.name === name)
    
    // useEffect(() => {
    //     return () => {
    //         setName('')
    //     };
    //   });


    const handleClick = () => {
    const staffName = inputEl.current.value

        if(name === ''){
            alert('Vui lòng nhập họ tên')
        }else if(name !== staffNames) {
            alert('Họ tên chưa đúng')
        }
    }
    
    return(
        
        <div className="finding">
            <input value={name} ref={inputEl} onChange={event => setName(event.target.value)} placeholder="Nhập tên nhân viên" />
            
            {staffNames !== undefined ? <Link to={`/staffs/${name}`}><button className="button">Tìm kiếm</button></Link> : <button onClick={handleClick} className="button">Tìm kiếm</button>}
        </div>
    )
}

export default FindStaff;