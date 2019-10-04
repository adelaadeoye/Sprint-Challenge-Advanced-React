import React from 'react';
import { MDBDataTable } from 'mdbreact';

const ContentTable = props => {
    
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Country',
        field: 'country',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Searches',
        field: 'searches',
        sort: 'asc',
        width: 100
      }
    ],
    rows:props.players
    
  };
  return (<>
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
    {console.log(props.players)}
    </>
  );
}

export default ContentTable;