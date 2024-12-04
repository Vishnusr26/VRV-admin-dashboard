import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar bg-white p-2'>
        <div className='m-2'>
            <img src="http://vrvsecurityservices.com/wp-content/uploads/2023/12/logo-.png" alt="logo" width={30} />
            <span className='brand-name fs-4 mb-4 ms-2'><strong>VRV</strong></span>
        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a href="" className='list-group-item py-2'>
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                <span >Dashboard</span>
            </a>
            <a href="" className='list-group-item py-2'>
                <i className='bi bi-people fs-4 me-3'></i>
                <span>Users</span>
            </a>
            <a href="" className='list-group-item py-2'>
                <i className='bi bi-clipboard-data fs-4 me-3'></i>
                <span>Report</span>
            </a>
            <a href="" className='list-group-item py-2'>
                <i className='bi bi-power fs-5 me-3'></i>
                <span>Logout</span>
            </a>
        </div>
    </div>
  )
}

export default Sidebar