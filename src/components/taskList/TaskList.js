import './taskList.css';

function TaskList({allTasks, handleDelete}) {
    return(
        <>
        <section className= 'task-list-container'>
            {
                allTasks && allTasks.map(({title, id, details}) => (
                    <div className="task-list" key={id} >
                        <input type="checkbox" className="checkbox"/>
                        <div className="description">
                            <label className='list-item'><h4 className='title'>{title}</h4></label>
                            {!details ? null : <span className='details'>{details}</span>}
                        </div>
                        <button className='remove' onClick={()=>{handleDelete(id)}}>X</button>
                    </div> 
                ))
            }
        </section>
        </>
    )
}
export default TaskList;
