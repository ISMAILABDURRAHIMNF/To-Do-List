import React from 'react';
import '../index.css'

export default function List({ datas, deleteTodos }) {
    return (
        <div className='todo-list-div scrollbar-hide'>
            <ul className='todo-list-ul'>
                {datas.map((data, i) => (
                    <li key={i} className='todo-list-li'><p>{data}</p><button className='todo-list-del' onClick={() => deleteTodos(i)}>X</button></li>
                ))}
            </ul>
        </div>
    )
}