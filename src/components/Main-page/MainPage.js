import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TableMain from "./TableMain";
import SidePanel from "../Side-bar/SidePanel";

const MainPage = ({ data, setAllData }) => {
  const [status, setStatus] = useState(false);
  const [edit, setEdit] = useState({ id: null, value: "" });
  const [toDelete, setToDelete] = useState({ id: null, value: "" });
  const [newTitle, setNewTitle] = useState({ id: null, value: "" });

  return (
    <Box sx={{ maxWidth: "lg", m: "auto" }}>
      {/* Sidebar */}
      {status === "add" && (
        <SidePanel
          status={status}
          setStatus={setStatus}
          itemData={newTitle}
          data={data}
          setAllData={setAllData}
        />
      )}
      {status === "update" && (
        <SidePanel
          status={status}
          setStatus={setStatus}
          itemData={edit}
          data={data}
          setAllData={setAllData}
        />
      )}
      {status === "delete" && (
        <SidePanel
          status={status}
          setStatus={setStatus}
          itemData={toDelete}
          data={data}
          setAllData={setAllData}
        />
      )}

      {/* new item button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: "20px", float: "right" }}
        onClick={() => {
          setStatus("add");
          setNewTitle({ id: new Date().getTime(), value: "" });
        }}
      >
        Add new Title
      </Button>
      {/* table of list of items and action button */}
      <TableMain
        data={data}
        setStatus={setStatus}
        setEdit={setEdit}
        setToDelete={setToDelete}
      />
    </Box>
  );
};

export default MainPage;
