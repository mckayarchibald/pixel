import { useState } from 'react';

export default function Pixel({paintBrushColor}) {
  const [pixelColor, setPixelColor] = useState('#FFFFFF');

  const handleClick = () => {
    paintBrushColor === pixelColor ? setPixelColor('#FFFFFF') : setPixelColor(paintBrushColor);
  }

  return (
    <button style={{height: '32px', width: '32px', backgroundColor: `${pixelColor}`, border: '.5px dashed #dfdfdf', color: `${pixelColor}`}} onClick={handleClick}>0</button>
  )
}
