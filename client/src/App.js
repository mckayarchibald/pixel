import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [row, setRow] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
  const [column, setColumn] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
  const [paintColor, setPaintColor] = useState('red')

  return (
    <div>
      <div>
        {row.map((row, rowIndex) => {
          return (
            <div>
              {column.map((column, columnIndex) => {
                return <Button paintColor={paintColor}/>
              })}
            </div>
          )
        })}
      </div>
      <button onClick={() => setPaintColor('red')}>Red</button>
      <button onClick={() => setPaintColor('green')}>Green</button>
    </div>
  );
}

export default App;
