import { useState } from 'react';

export default function Button({paintColor}) {
  const [color, setColor] = useState('#FFFFFF');

  const handleClick = () => {
    if(color === '#FFFFFF') {
      setColor(paintColor);
    } else {
      setColor('#FFFFFF');
    }
  }

  return (
    <button style={{height: '25px', width: '25px', backgroundColor: `${color}`, border: '1px dotted #d4d4d4', color: `${color}`}} onClick={handleClick}>0</button>
  )
}
