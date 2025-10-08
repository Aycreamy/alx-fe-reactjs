// src/App.jsx
import React from 'react';
import TodoList from './components/TodoList'; // ✅ make sure this import exists

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Todo App</h1>
      <TodoList /> {/* ✅ include the component */}
    </div>
  );
}

export default App;
