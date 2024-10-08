export function Todos({todos}){
    return(
        <div>
            {todos.map((todo)=>(
                <div>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                </div>
            ))}
        </div>
    )
}