import { useState } from 'react';

export default function Pixel({paintColor}) {
  const [color, setColor] = useState('#FFFFFF');

  return (
    <button style={{height: '32px', width: '32px', backgroundColor: `${color}`, border: '.5px dashed #dfdfdf', color: `${color}`}} onClick={() => setColor(paintColor)}>0</button>
  )
}
