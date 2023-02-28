import React from 'react'
import { useGetMonitorsQuery } from './monitorApiSlice'
import Monitor from './Monitor'
import "../../styles/Table.css"

const MonitorList = () => {
    const {
        data: monitors,
        isLoading,
        isSuccess,
        isError,
        error
      } = useGetMonitorsQuery()
    
      let content
    
      if (isLoading) content = <p>Loading...</p>
    
      if (isError) {
        content = <p className={isError ? "errmsg" : "offscreen"}>{error?.data?.message}</p>
      }
    
      if (isSuccess) {
        const { ids } = monitors
    
        const tableContent = ids?.length
            ? ids.map(monitersId => <Monitor key={monitersId} monitorId={monitersId} />)
            : null
        
       content = (
          <table className="table-monitor">
            <thead className="table__thead">
              <tr>
                <th scope="col" className="table__th-temp">temp</th>
                <th scope="col" className="table__th-moistures">moisture</th>
                <th scope="col" className="table__th-lighting">lighting</th>
                <th scope="col" className="table__th-createdAt">createdAt</th>
              </tr>
            </thead>
            <tbody>
              {tableContent}
            </tbody>
          </table>
        )
      }
      return content
}

export default MonitorList