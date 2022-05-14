import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AddItem from "./Side-bar-op/AddItem";
import UpdateItem from "./Side-bar-op/UpdateItem";
import DeleteItem from "./Side-bar-op/DeleteItem";

function SidePanel({ status, setStatus, itemData, data, setAllData }) {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  const toggleDrawer = () => {
    setSidebarStatus(!sidebarStatus);
    setStatus(false);
  };

  //Add new title on click
  const addTitle = (newTitle) => {
    const newData = [...data, { id: newTitle.id, title: newTitle.value }];
    setAllData(newData);
    setStatus(false);
  };

  //Update existing title on click
  const updateTitle = (edit) => {
    const newData = data.map((item) => {
      if (item.id === edit.id) {
        return { ...item, title: edit.value };
      }
      return item;
    });
    setAllData(newData);
    setStatus(false);
  };

  // delete on click
  const deleteTitle = (deleteItem) => {
    const newData = data.filter((item) => item.id !== deleteItem.id);
    setAllData(() => newData);
    setStatus(false);
  };

  return (
    <Drawer anchor={"left"} open={sidebarStatus} onClose={toggleDrawer}>
      <Box sx={{ width: 550, margin: "20px" }} role="presentation">
        {status === "add" && (
          <AddItem newTitle={itemData} updateNewTitle={addTitle} />
        )}
        {status === "update" && (
          <UpdateItem edit={itemData} updateData={updateTitle} />
        )}
        {status === "delete" && (
          <DeleteItem
            deleteItem={itemData}
            deleteData={deleteTitle}
            setSidebarStatus={setStatus}
          />
        )}
      </Box>
    </Drawer>
  );
}

export default SidePanel;
