import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TableMain from "./TableMain";
import SidePanel from "../Side-bar/SidePanel";

const MainPage = ({ data, setAllData }) => {
  const [status, setStatus] = useState(false);
  const [selected, setSelected] = useState({ id: null, value: "" });

  return (
    <Box sx={{ maxWidth: "lg", m: "auto" }}>
      {/* Sidebar */}
      {status && (
        <SidePanel
          status={status}
          setStatus={setStatus}
          itemData={selected}
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
          setSelected({ id: new Date().getTime(), value: "" });
        }}
      >
        Add new Title
      </Button>
      {/* table of list of items and action button */}
      <TableMain data={data} setStatus={setStatus} setSelected={setSelected} />
    </Box>
  );
};

export default MainPage;
