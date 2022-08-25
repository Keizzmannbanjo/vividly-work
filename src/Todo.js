import "./Todo.css";
import {
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Modal,
  Box,
  Button,
  Input,
} from "@mui/material";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { DeleteForever } from "@mui/icons-material";
import { useState } from "react";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 4,
};

function Todo({ todo }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(todo.todo);

  const updateTodo = () => {
    setDoc(doc(db, "todos", todo.id), { todo: input }, { merge: "true" });
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <Box sx={styles}>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button variant="contained" onClick={(e) => updateTodo()}>
            Update
          </Button>
        </Box>
      </Modal>
      <List>
        <ListItem className="todo">
          <ListItemAvatar></ListItemAvatar>
          <ListItemText secondary="Dummy text here 🕘" primary={todo.todo} />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForever
          onClick={(e) => {
            deleteDoc(doc(db, "todos", todo.id));
          }}
        ></DeleteForever>
      </List>
    </>
  );
}

export default Todo;
