import React, { useState, useEffect, useRef } from 'react';

const Form = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            ref={inputRef}
            type='text'
            placeholder='Update your item'
            value={input}
            name='text'
            className='todo-input edit'
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            ref={inputRef}
            type='text'
            placeholder='Add a Task'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add
          </button>
        </>
      )}
    </form>
  );
};

export default Form;
