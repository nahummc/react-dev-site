import React from 'react';
import Button from 'react-bootstrap/Button';


const TodoList = ({ list, remove }) => {
    return (
        <div className='list-wrapper'>
            {/*
             if list (prop passed as todos) is not 0,
             map list entry and index to li component
             */}
        {list?.length > 0 ? (
            <ul className="todo-list">
              {list.map((entry, index) => (
                  <div className="todo">
                  <li key={index}> {entry} </li>

                <Button className="delete-button btn-danger"
                    onClick={() => {
                      remove(entry);
                    }}>Delete</Button>
                </div>
              ))}
            </ul>
            // else display nothing
          ) : (
              <div className="empty">
              <p>No task found</p>
            </div>
          )}
          </div>
    );
}

export default TodoList