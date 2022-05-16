import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { crudAction } from "../../store/slice/crud-slice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: 15,
    fontSize: 16,
  },
}));

const TableMain = () => {
  const dispatch = useDispatch();
  const crudData = useSelector((state) => state.crud);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "lg" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Index</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crudData.data.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No data
              </TableCell>
            </TableRow>
          )}
          {(crudData.data || []).map((row, index) => (
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
                    dispatch(crudAction.updateStatus("update"));
                    dispatch(
                      crudAction.currentItem({ id: row.id, title: row.title })
                    );
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
                    dispatch(crudAction.updateStatus("delete"));
                    dispatch(
                      crudAction.currentItem({ id: row.id, title: row.title })
                    );
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
