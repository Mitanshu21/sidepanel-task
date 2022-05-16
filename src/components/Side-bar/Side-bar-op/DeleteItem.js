import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const DeleteItem = ({ deleteItem, deleteData, setSidebarStatus }) => {
  return (
    <>
      {deleteItem.id !== null && deleteItem !== false && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontSize: "h4.fontSize",
              textTransform: "capitalize",
              margin: "20px",
              color: "error.main",
            }}
          >
            are you sure want to delete?
          </Box>
          <Box
            sx={{
              fontSize: "h5.fontSize",
              margin: "20px",
            }}
          >
            {deleteItem.title}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{ marginRight: "5px" }}
              onClick={() => {
                deleteData({ id: deleteItem.id, title: deleteItem.title });
              }}
            >
              Delete
            </Button>
            {/* delete on click */}
            <Button
              variant="contained"
              color="primary"
              sx={{ marginLeft: "5px" }}
              onClick={() => {
                setSidebarStatus();
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DeleteItem;
