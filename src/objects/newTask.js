const newTask = {
    'idTask':null, 
    'description':null, 
    'emoji':'📋', 
    'name':'New task', 
    'status':'todo', 
    'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })
}

const defaultTask = {
    value:[
        {'idTask':'1', 'description':null, 'emoji':'📋', 'name':'Do the dinner', 'status':'doing', 'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })},
        {'idTask':'2', 'description':null, 'emoji':'📋', 'name':'Sleep', 'status':'todo', 'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })},
        {'idTask':'3', 'description':null, 'emoji':'😎', 'name':'Learn TypeScript', 'status':'todo', 'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })},
        {'idTask':'4', 'description':null, 'emoji':'📋', 'name':'Buy meet', 'status':'done', 'date':new Date().toLocaleString('es-ES', { timeZone: 'UTC' })},
    ],
    lastId:'4',
    editTask:{},
}

export default newTask;
export {defaultTask};