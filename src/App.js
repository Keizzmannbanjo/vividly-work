import { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import "./App.css";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const colRef = query(collection(db, "todos"), orderBy("timestamp", "desc"));
    onSnapshot(colRef, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
      );
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    const colRef = collection(db, "todos");
    addDoc(colRef, { todo: input, timestamp: serverTimestamp() }).then((doc) =>
      setInput("")
    );
  };
  return (
    <div className="App">
      <h1>Hello Clever Programmers 🧨!</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
