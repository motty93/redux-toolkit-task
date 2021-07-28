import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newTask } from './taskSlice';

export const TaskInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTask(title));
    setTitle('');
  };

  // handleSubmit()やアロー関数を渡すと上手く動かない
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="your task?"
        />
        <button>作成する</button>
      </form>
    </div>
  );
};
