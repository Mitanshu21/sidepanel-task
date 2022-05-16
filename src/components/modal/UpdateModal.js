import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import InputField from "../Side-bar/Side-bar-op/InputField";
import { crudAction } from "../../store/slice/crud-slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(crudAction.updateStatus(false));
  };
  const edit = useSelector((state) => state.crud.currentItem);
  const [input, setInput] = useState(edit.title || "");

  //Update existing title on click
  const updateTitle = (edit) => {
    dispatch(crudAction.update({ id: edit.id, title: edit.title }));
    dispatch(crudAction.updateStatus(false));
  };

  const submitHandler = (prop) => {
    if (prop.title.trim().length === 0) return;
    updateTitle(prop);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {edit.id !== null && edit !== false && (
            <InputField
              color="warning.main"
              label="Edit title:"
              input={input}
              setInput={setInput}
            >
              <Button
                variant="contained"
                color="success"
                sx={{ padding: "15px" }}
                onClick={() => {
                  submitHandler({ id: edit.id, title: input });
                }}
              >
                Update
              </Button>
            </InputField>
          )}
        </Box>
      </Modal>
    </div>
  );
}
