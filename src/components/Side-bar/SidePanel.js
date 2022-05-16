import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AddItem from "./Side-bar-op/AddItem";
import DeleteItem from "./Side-bar-op/DeleteItem";
import { useSelector, useDispatch } from "react-redux";
import { crudAction } from "../../store/slice/crud-slice";

function SidePanel({ setStatus, setAllData }) {
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const status = useSelector((state) => state.crud.status);
  const itemData = useSelector((state) => state.crud.currentItem);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setSidebarStatus(!sidebarStatus);
    dispatch(crudAction.updateStatus(false));
  };

  //Add new title on click
  const addTitle = (newTitle) => {
    dispatch(crudAction.add({ id: newTitle.id, title: newTitle.title }));
    dispatch(crudAction.updateStatus(false));
  };

  // delete on click
  const deleteTitle = (deleteItem) => {
    dispatch(crudAction.delete(deleteItem.id));
    dispatch(crudAction.updateStatus(false));
  };

  return (
    <Drawer anchor={"left"} open={sidebarStatus} onClose={toggleDrawer}>
      <Box sx={{ width: 550, margin: "20px" }} role="presentation">
        {status === "add" && (
          <AddItem newTitle={itemData} updateNewTitle={addTitle} />
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
