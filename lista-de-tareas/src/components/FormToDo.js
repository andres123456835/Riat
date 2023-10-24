import React, { useState } from 'react';

function FormToDo({ addTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            addTask({
                title: task,
                completed: false
            });
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input 
                    type="text" 
                    value={task}
                    onChange={e => setTask(e.target.value)} 
                    placeholder="Introduce una tarea" 
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">Añadir</button>
        </form>
    );
}

export default FormToDo;
