import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box
      sx={{
        width: "300px",
        margin: "auto",
        mt: 5,
        padding: 2,
        borderRadius: 2,
        bgcolor: "transparent",
      }}
    >
      <Typography variant="h4" align="center" sx={{ mb: 2, color: "white" }}>
        To-do List
      </Typography>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{ mb: 2, input: { color: "white", bgcolor: "black" } }} // رنگ متن و پس‌زمینه فیلد ورودی
      />
      <Button
        variant="contained"
        onClick={handleAddTask}
        fullWidth
        sx={{ mb: 2, bgcolor: "purple", color: "white" }} // رنگ دکمه بنفش و متن سفید
      >
        Add Task
      </Button>
      <List sx={{ maxHeight: "300px", overflowY: "auto" }}>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            className="list-item"
            sx={{ mb: 1, borderRadius: 1 }}
          >
            <ListItemText primary={task} className="task-text" />{" "}
            {/* رنگ متن تسک‌ها به سفید */}
            <IconButton
              edge="end"
              aria-label="delete"
              className="delete-icon" // اضافه کردن کلاس به آیکون
              onClick={() => handleDeleteTask(index)}
            >
              <DeleteIcon /> {/* رنگ آیکون حذف به صورت CSS کنترل شده */}
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default App;
