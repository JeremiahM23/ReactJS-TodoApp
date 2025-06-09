import { useState, useEffect } from "react"; // use effect is for tracking events that happen on the webpage
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";




function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  //    ]    

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ]) //seta function is the second one

  const [selectedTab, setSelectedTab] = useState('Open') // array destructuring

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
    
  }

  // handle function are for handling more complex data structure fore ex: a list, and modifing values in that list
  function handleCompleteTodo(index) {
    // update/edit/modify
    let newTodoList = [...todos]// created a duplicate array
    let completedTodo = todos[index] // accessed the todos that we are specifically completeing
    completedTodo['complete'] = true //modifyied that status of it
    newTodoList[index] = completedTodo // saved the new entry to the new list 
    setTodos(newTodoList) // overided the state to match the new list that we created
    handleSaveData(newTodoList)

  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })

    setTodos(newTodoList)
    handleSaveData(newTodoList) //making sure it saves the data within the delete portion

  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    // updated the guard clause to check if theres no local storage or if there is local storage and we cant find an item, if we cannot find the todo-app it will show up undefine
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    

    // if we both have the item todo-app and have access to the data base we can pass in the JSON assign it to our database
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])


  return (
    // added the components to app.jsx
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
