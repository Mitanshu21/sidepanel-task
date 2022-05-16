import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TableMain from "./TableMain";
import SidePanel from "../Side-bar/SidePanel";
import { useSelector, useDispatch } from "react-redux";
import { crudAction } from "../../store/slice/crud-slice";
import UpdateModal from "../modal/UpdateModal";

const MainPage = ({ data, setAllData }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.crud.status);

  return (
    <Box sx={{ maxWidth: "lg", m: "auto" }}>
      {/* Sidebar */}
      {status === "add" && <SidePanel />}
      {status === "delete" && <SidePanel />}
      {status === "update" && <UpdateModal />}

      {/* new item button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: "20px", float: "right" }}
        onClick={() => {
          dispatch(crudAction.updateStatus("add"));
          dispatch(
            crudAction.currentItem({ id: new Date().getTime(), title: "" })
          );
        }}
      >
        Add new Title
      </Button>
      {/* table of list of items and action button */}
      <TableMain />
    </Box>
  );
};

export default MainPage;
