import React from 'react';

const Clock01 = () => {
    const date = new Date();
    
    return (
        <div>현재시각 {date.getHours()}:{date.getMinutes()}:{date.getSeconds()} {date.getHours() < 12 ? 'AM' : 'PM'}</div>
    );
};

export default Clock01;