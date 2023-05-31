import * as React from 'react';
import { DataGrid, } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 130,
  },
  {
    field: 'address',
    headerName: 'Addresss',
    type: 'string',
    width: 120,
  },
  {
    field: 'phoneno',
    headerName: 'Phone Number',
    type: 'string',
    width: 100,
  },

  
];

const rows = [
   {id:1, firstName:'ezhil' ,lastName:'arasan' ,email:'ezhil13@gmail.com' ,age:26 , address:'20 coimbaore', phoneno:978676556},
   {id:2, firstName:'abc' ,lastName:'jon' ,email:'jon12@gmail.com' ,age:26 , address:'20 erode', phoneno:978676556},
   {id:3, firstName:'cbd' ,lastName:'ds' ,email:'ssds@gmail.com' ,age:26 , address:'20 chennai', phoneno:978676556},
   {id:4, firstName:'gd' ,lastName:'adasdjrasan' ,email:'kjj@gmail.com' ,age:26 , address:'20 bangalore', phoneno:978676556},
   {id:5, firstName:'asdsjah' ,lastName:'uuyg' ,email:'sds@gmail.com' ,age:26 , address:'20 tirunelveli', phoneno:978676556},
   {id:6, firstName:'sdask' ,lastName:'dsdjkh' ,email:'asa@gmail.com' ,age:26 , address:'20 madurai', phoneno:978676556},
];

export default function MetricPage() {
  return (
    <div style={{ height: 400, width: '100%' ,marginTop:20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
