export function Tabs(props) {
    const {todos, selectedTab, setSelectedTab} = props
    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav className="tab-container"> 
            {tabs.map((tab, tabIndex) => { 
                const numOfTasks = tab === 'All' ?
                todos.length : tab === 'Open' ?
                todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length
                
                return (
                    <button onClick={() => {
                        setSelectedTab(tab) // this makes it where you switch between the "all, open, and completed tab"
                    }} key={tabIndex} className={"tab-button" + (tab === selectedTab ? ' tab-selected' : '' )}>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )// the code above lets us write out one button instead of having to put a bunch of buttons in one code area {this is the javascript in the code}
            })}
            <hr /> 
        </nav>
    )
}