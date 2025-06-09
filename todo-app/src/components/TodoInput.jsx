import { useState } from 'react'

export function TodoInput(props) {
    const {handleAddTodo} = props
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)
    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder="Add task"/> 
            <button onClick={() => {
                if (!inputValue) {return} //guard clause, guards the second line of code
                handleAddTodo(inputValue)
                setInputValue('') // after entering a task the add task section goes back to blank
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
