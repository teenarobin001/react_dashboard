import React, { useState } from "react";
import "./userList.css";
import { DataGrid,} from "@mui/x-data-grid";
import { users } from "../../../dummyData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete"; 
import { NavLink } from "react-router-dom";

const UserList = () => {
    const [data,setData] = useState(users);

    const deleteHandle = (id) => {
        setData(data.filter((item)=>item.id !== id))

    }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userRow">
            <img className="userImage" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <NavLink to={{
                pathname: "/users/"+params.row.id,
                aboutProps:{
                    selectedidds:params.row.id
                   }
                }}
                
                > 
              <EditIcon className="userListButton" />
            </NavLink>
            <DeleteIcon className="userListButton" onClick={()=>deleteHandle(params.row.id)}/>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <div className="userList" style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data}
          disableRowSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserList;
