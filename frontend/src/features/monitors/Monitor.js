import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectMonitorById } from './monitorApiSlice';

import "../../styles/Table.css"

const Monitor = ({ monitorId }) => {
  const monitor = useSelector(state => selectMonitorById(state, monitorId));
  // const navigate = useNavigate();

  if (monitor) {
    // const handleEdit = () => navigate(`/dash/monitors/${monitorId}`);

    // const monitorRolesString = monitor.roles.toString().replaceAll(',', ', ');

    const cellStatus = monitor.active ? '' : 'table__cell--inactive'

    return (
      <tr className="table-allcell">
        <td className={`table-cell ${cellStatus}`}>{monitor.temp}</td>
        <td className={`table-cell ${cellStatus}`}>{monitor.moisture}</td>
        <td className={`table-cell ${cellStatus}`}>{monitor.createdAt}</td>
        <td className={`table-cell ${cellStatus}`}>{monitor.updatedAt}</td>
        {/* <td className={`table-cell ${cellStatus}`}>
          <button className="icon-button table__button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td> */}
      </tr>
    )
  } else return null;
}

export default Monitor