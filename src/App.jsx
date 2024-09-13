import './App.css';
import Button from './components/Button';
import Counter from './components/counter';
import yellowDragonLogo from './images/Dragon.png';
import { useState } from 'react';

function App() {

  const [clicksNum, setClicksNum] = useState(0);

  const clickManager = () => {
    setClicksNum(clicksNum + 1);
  };

  const restartCounter = () => {
    setClicksNum(0);
  };

  return (
    <div className='App'>
      <div className = 'yellowDragon-logo-container'>
        <img 
          className='yellowDragon-logo'
          src={yellowDragonLogo}
          alt='Yellow Dragon logo'/>
          <h1 className='yellowDragon-name'>Yellow  Dragon   Counter</h1>
      </div>
      <div className='principal-container'>
        <Counter clicksNum={clicksNum} />
        <Button
          text='Click'
          isClickButton={true}
          clickManager={clickManager} />
        <Button 
          text='Restart'
          isClickButton={false}
          clickManager={restartCounter} />
      </div>
    </div>
  );
}

export default App;
