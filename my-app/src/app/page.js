"use client";
import React, { useRef, useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const inputRef = useRef();

  const addTask = () => {
    const newTask = inputRef.current.value.trim();
    if (!newTask) {
      alert("No task added");
    } else {
      // Add a new task with a "completed" status
      setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
      inputRef.current.value = "";
    }
  };

  const delTask = (indexToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
  };

  const toggleTaskCompletion = (indexToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === indexToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-[1000px] mx-auto my-[50px] bg-orange-500">
      <div className="p-5">
        <input type="text" ref={inputRef} />
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        <ul className="list-disc pl-5">
          {tasks.map((task, index) => (
            <li
              key={index}
              onClick={() => toggleTaskCompletion(index)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}{" "}
              <button
                className="bg-cyan-50 py-1 px-4 rounded-full"
                onClick={() => delTask(index)}
              >
                Del
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
