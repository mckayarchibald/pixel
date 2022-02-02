import { useState } from 'react';

export default function Pixel({setPaintBrushColor}) {
  const [paletteColors, setPaletteColors] = useState(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'])
  return (
    <div style={{margin: '10px'}}>
      {paletteColors.map((color) => {
        return <button style={{backgroundColor: `${color}`, color: `${color}`, height: '32px', width: '32px', border: 'none'}} onClick={() => setPaintBrushColor(color)}>0</button>
      })}
    </div>
  )
}
