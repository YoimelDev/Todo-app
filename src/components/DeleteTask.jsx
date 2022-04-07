import React from 'react';

export const DeleteTask = ({ deleteAllTasks }) => {
    return (
        <div className='w-100 text-right'>
            <button className='w-1/5 p-2 my-4 bg-red-700 text-white cursor-pointer hover:bg-red-900 rounded-lg '
                onClick={() => deleteAllTasks()}
            >Delete all</button>
        </div>
    );
};
