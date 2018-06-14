//@flow
import React from 'react';
import handler from './handler';
import ToDoForm from '../todoform';

export default handler(({ isOpen, setOpen }) => (
  <div>
    {/*打開之前 Add Task*/}
    <div
      styleName={`add-task ${isOpen ? 'hidden' : ''}`}
      onClick={setOpen(true)}>
      ＋ Add Task
    </div>
    {/*打開之後 Add Form*/}
    <div styleName={`add-from ${!isOpen ? 'hidden' : ''}`}>
      <ToDoForm key={`todo-add-form`} mode="add" toggle={setOpen} />
    </div>
  </div>
));
