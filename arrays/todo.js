const todos = ['Go with dog', 'Exercise', 'Do some JS course', 'Clean the room', 'Go sleep']
for(let schedule = 0; schedule < todos.length; schedule++){
console.log(`${schedule+1}. ${todos[schedule]}`)}

console.log(todos.indexOf('Exercise'))