import "./Todo.css";
import { List, ListItemAvatar, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

function Todo({ todo }) {
  return (
    <List>
      <ListItem className="todo">
        <ListItemAvatar></ListItemAvatar>
        <ListItemText secondary="Dummy text here 🕘" primary={todo} />
      </ListItem>
      <DeleteIcon
        onClick={(e) => {
          deleteDoc(doc(db, "todos", todo.id));
        }}
      ></DeleteIcon>
    </List>
  );
}

export default Todo;
