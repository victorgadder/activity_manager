import React, { useState, useEffect, useRef } from 'react'

function TodoFormulario(props) {

    //iniciando as variáveis de um jeito melhor pra edição
    const [input,
        setInput] = useState(
            props.edit ? props.edit.value : '');
    
    const[descricao, 
        setDescricao] = useState(
            props.edit ? props.edit.descricao : '');

    const[categoria, 
        setCategoria] = useState(
            props.edit ? props.edit.categoria : '');

    /*
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const descricaoRef = useRef(null)
    useEffect(() => {
        descricaoRef.current.focus()
    })
    */

    //lidando com os dados
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleDescricaoChange = e => {
        setDescricao(e.target.value);
    }

    const handleCategoriaChange = e => {
        setCategoria(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
            description: descricao,
            comboBox: categoria
        });

        setInput('')
        setCategoria('')
        setDescricao('')

    };

    //formulario de preenchimento: primeiro, update, dpois o normal
    return (
        <form className='todo-formulario' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type='text'
                        placeholder='Atualize o título'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        maxLength='30'
                        //ref={inputRef}
                    />
                    <br /><br />
                    <label className='label'>
                        Descrição da Atividade:
                    </label>
                    <br />
                    <textarea
                        type='description'
                        placeholder='Atualize sua atividade'
                        value={descricao}
                        name='description'
                        className='textarea'
                        onChange={handleDescricaoChange}
                        //ref={descricaoRef}
                        maxLength='100'
                    >
                    </textarea>
                    <br /><br />
                    <label className='label'>
                        Escolha a categoria de atividade:
                        <select
                            type='comboBox'
                            name='comboBox'
                            value={categoria}
                            onChange={handleCategoriaChange}
                            className='box edit'
                        >
                            <option value=''>-Selecione-</option>
                            <option value='Trabalho'>Trabalho</option>
                            <option value='Pessoal'>Pessoal</option>
                        </select>
                    </label>
                    <br /><br />
                    <button
                        className='todo-botao edit'>Atualizar Atividade</button>
                </>
            ) :
                (
                    <>
                        <input
                            type='text'
                            placeholder='Título da atividade'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            maxLength='30'
                            //ref={inputRef}
                        />
                        <br /><br />
                        <label className='label'>
                            Descrição da Atividade:
                        </label>
                        <br />
                        <textarea
                            type='description'
                            placeholder='Descreva sua atividade'
                            value={descricao}
                            name='description'
                            className='textarea'
                            onChange={handleDescricaoChange}
                            maxLength='100'
                            //ref={descricaoRef}
                        >
                        </textarea>
                        <br /><br />
                        <label className='label'>
                            Escolha a categoria de atividade: <n />
                            <select
                                type='comboBox'
                                name='comboBox'
                                value={categoria}
                                onChange={handleCategoriaChange}
                                className='box'
                            >
                                <option value=''>-Selecione-</option>
                                <option value='Trabalho'>Trabalho</option>
                                <option value='Pessoal'>Pessoal</option>
                            </select>
                        </label>
                        <br /><br />
                        <button 
                        className='todo-botao'
                        >
                            Adicionar Atividade
                        </button>
                    </>)
            }
        </form>
    )
}

export default TodoFormulario
