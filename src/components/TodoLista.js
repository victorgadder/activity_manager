import React, {useState} from 'react'
import Todo from './Todo';
import TodoFormulario from './TodoFormulario'

function TodoLista() {

    const [todos, setTodos] = useState([])

    //evitando digitações indesejadas como espaços e etc.
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            alert('Dê um titulo para sua atividade por gentileza!');
            return;
        }
        
        if(!todo.description || /^\s*$/.test(todo.description)) {
            alert('Escreva uma descrição para sua atividade por gentileza!');
            return;
        };

        if(todo.comboBox === ''){
            alert('Defina uma categoria por gentileza!')
            return;
        }

        alert('Atividade adicionada com sucesso!!!')

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todo, ...todos);
    };

    //atualizando a atividade
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            alert('Atualize o título por gentileza!');
            return;
        } else if(!newValue.description || /^\s*$/.test(newValue.description)) {
            alert('Atualize a descrição por gentileza!');
            return;
        } else if(newValue.comboBox === ''){
            alert('Atualize a categoria por gentileza!');
            return;
        } else {

        alert('Atividade atualizada com sucesso!!!')

        setTodos(prev => prev.map(
            item => (
                item.id === todoId ? newValue : item)))

            }
                
    }

    //função pra remover a atividade
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Gerenciador de atividades</h1>
            <h3>Cadastre sua atividade abaixo:</h3>
            <TodoFormulario onSubmit={addTodo} />
            <div className='todo'>
                <div>
                    <label className='label trabalho'>
                        Atividades de trabalho
                    </label>
                    <label className='label pessoais'>
                        Atividades pessoais
                    </label>
                </div>
            <Todo 
            todos = {todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
            </div>
        </div>
    )
}

export default TodoLista
