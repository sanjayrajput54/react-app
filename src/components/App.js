import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div style={{"display":"flex", "justify-content":"center","background":"#ddd"}}>
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
  </div>
);

export default App;
