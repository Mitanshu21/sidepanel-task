import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const TableMain = ({ data, setStatus, setEdit, setToDelete }) => {
  return (
    <TableContainer component={Paper} align="center">
      <Table sx={{ maxWidth: "lg" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Index</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No data
              </TableCell>
            </TableRow>
          )}
          {(data || []).map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    setStatus("update");
                    setEdit({ id: row.id, value: row.title });
                  }}
                  sx={{ m: 0.5 }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ m: 0.5 }}
                  onClick={() => {
                    setStatus("delete");
                    setToDelete({ id: row.id, value: row.title });
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMain;
