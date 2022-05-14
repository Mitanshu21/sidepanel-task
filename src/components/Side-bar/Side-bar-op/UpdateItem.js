import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const UpdateItem = ({ edit, updateData }) => {
  const [input, setInput] = useState(edit.value || "");

  return (
    <>
      {edit.id !== null && edit !== false && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            type="text"
            id="outlined-size-normal"
            sx={{ margin: "10px" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            sx={{ padding: "15px" }}
            onClick={() => {
              updateData({ id: edit.id, value: input });
            }}
          >
            Update
          </Button>
        </Box>
      )}
    </>
  );
};

export default UpdateItem;
