import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Book_table = ({ id, coverImg, title }) => {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <img src={coverImg} />
      </TableCell>
      <TableCell>{title}</TableCell>
    </TableRow>
  );
};

export default Book_table;
