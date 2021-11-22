import React, { useState } from 'react'
import TodoFormulario from './TodoFormulario'
import TodoLista from './TodoLista'
import { FaWindowClose, FaEdit, FaRegHandPointRight } from 'react-icons/fa'

//função pra criar as linhas com as informações
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        comboBox: '',
        description: '',
    })

    const submitUpdate = (value, comboBox, description) => {
        updateTodo(edit.id, value, comboBox, description)
        setEdit({
            id: null,
            value: '',
            comboBox: '',
            description: ''
        })
    }

    //abrindo o formulário para o update
    if (edit.id) {
        return <TodoFormulario
            edit={edit}
            onSubmit={submitUpdate}
        />;
    }

    //verificando se o todo tá completo ou não
    return todos.map((todo, index) => (
        //escolhendo a classe de acordo com a categoria
        <div
        className={todo.comboBox === 'Trabalho' ? 'linha esquerda' : 'linha direita'}
            key={index}
        >
            <div key={todo.id}
                onClick={() => completeTodo(todo.id)}
                className={todo.isComplete ? 'Completa' : 'digitacao'}
            >
                {todo.text}
                <FaRegHandPointRight className='finger-icon' />
                <p className='coluna-descricao'>
                    {todo.description}
                </p>
            </div>
            <div className="icons">
                <FaEdit
                    onClick={() => setEdit({
                        id: todo.id,
                        value: todo.text,
                        comboBox: todo.comboBox,
                        description: todo.description
                    })
                    }
                    className='edit-icon'
                />
                <FaWindowClose
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
            </div>
        </div>
    ))
}

export default Todo
