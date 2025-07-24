import React , { useState } from 'react'
import { userRows } from '../../datas'
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import type { GridColDef } from '@mui/x-data-grid'
import './userList.css'
import { Link } from 'react-router';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function UserList() {

  const columns: GridColDef<(typeof userDatas)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
    {
    field: 'avatar',
    headerName: 'Avatar',
    width: 90,
    editable: false,
    renderCell: (params) => {
      return (
        <>
        <Avatar sx={{marginTop:0.5}}>{params.row.avatar}</Avatar>
        </>
      )
    }
  },
  {
    field: 'state',
    headerName: 'State',
    width: 150,
    editable: false,
  },
  {
    field: 'full_name',
    headerName: 'Full name',
    width: 200,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
    editable: false,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
  },
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 210,
  },
  {
    field: 'action',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => {
      return (
        <>
       <Link to={`/user/${params.row.id}`}>
        <button className='userListEdit'>Edit</button>
       </Link>
       <DeleteOutlineIcon className='userListDelete' onClick={() => userDelete(params.row.id)}/>
      </>
      )
    }
  },
];

  const [userDatas , setUserDatas] = useState(userRows)

  const userDelete = (userId:number) => {
    setUserDatas(userDatas.filter(user => user.id !== userId))
  }

  return (

    <>
    <div className='userList'>
      <DataGrid
        rows={userDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
    </>
    
  )
}
