import React from 'react';
import './Style sheet/Counter.css';

function Counter({ clicksNum }) {
  return (
    <div className='counter'>
      {clicksNum}
    </div>
  );
}

export default Counter;