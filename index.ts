import axios from 'axios'; 

const url = 'https://jsonplaceholder.typicode.com/todos/1'

  // Interface is used to define a structure of an object
  // shortcuts and labels that a value has
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  axios.get(url).then(response => {
  
    const todo = response.data as Todo;
    
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed)
  })

  // The type annotation goes after the parameter, and the parameters HAVE to match the arguments being passed in on line 20. 
  const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
      The Todo with id: ${id}
      Has a title of : ${title}
      Is it completed?: ${completed}
    `);
  }