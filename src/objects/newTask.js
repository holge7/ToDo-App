const newTask = {
    'idTask':null, 
    'description':null, 
    'emoji':'📋', 
    'name':'New task', 
    'status':'todo', 
    'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })
}

export default newTask;