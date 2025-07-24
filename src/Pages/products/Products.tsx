import React , { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import type { GridColDef } from '@mui/x-data-grid'
import './product.css'
import { Link } from 'react-router';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { products } from '../../datas';

export default function Products() {

  const columns: GridColDef<(typeof products)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 100,
    editable: false,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
    editable: false,
    renderCell: (params) => {
      return (
        <>
        {`$ ${params.row.price}`}
        </>
      )
    }
  },
  {
    field: 'action',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => {
      return (
        <>
       <Link to={`/product/${params.row.id}`}>
        <button className='userListEdit'>Edit</button>
       </Link>
       <DeleteOutlineIcon className='userListDelete' onClick={() => userDelete(params.row.id)}/>
      </>
      )
    }
  },
];

  const [productsDatas , setProductsDatas] = useState(products)

  const userDelete = (userId:number) => {
    setProductsDatas(productsDatas.filter(user => user.id !== userId))
  }

  return (

    <>
    <div className='userList'>
      <DataGrid
        rows={productsDatas}
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
