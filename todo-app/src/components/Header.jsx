export function Header(props) {
    const { todos } = props //destructurizing the todo list
    const todosLength = todos.length
    const isTasksPlural = todos.length != 1 //when the todo length
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
}