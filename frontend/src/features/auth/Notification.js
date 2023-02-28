import React from 'react'

const Notification = () => {
    const content = (
        <section  className="notification-section">
            <span>Notification</span> 
            <div className='Table'>
                <table>
                    <tr>
                        <th>ความผิดปกติ</th>
                        <th>ค่าสถานะ</th>
                        <th>เวลา</th>
                        <th>วันที่</th>
                    </tr>
                    <tr>
                        <td>อุณหภูมิเกินมาตรฐาน</td>
                        <td>30 องศา</td>
                        <td>12:00 AM</td>
                        <td>01/01/2023 </td>
                    </tr>
                </table>
            </div>
        </section>
    )
  return content
}

export default Notification