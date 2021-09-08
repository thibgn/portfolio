import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

export default function Canvas() {
  const [color, setColor] = useState('#000');
  const [brushSize, setBrushSize] = useState(5);

  const colorPickerRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    colorPickerRef.current = color;
  }, [color]);

  const colorChange = (e) => {
    setColor(e.target.value);
    document.querySelector('#primary_color').style.color = color;
  };

  const clearRect = () => {
    canvasRef.current.clear();
  };

  const brushInc = () => {
    setBrushSize(brushSize + 2);
  };
  const brushDesc = () => {
    setBrushSize(brushSize - 2);
  };

  return (
    <Draw>
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={'100%'}
        canvasHeight={600}
        hideGrid={true}
        brushColor={color}
        brushRadius={brushSize}
        lazyRadius={10}
      />
      <div className='toolbar'>
        <input
          type='color'
          id='primary_color'
          className='field-radio'
          ref={colorPickerRef}
          onChange={(e) => colorChange(e)}
        />
        <div className='brushInc' onClick={() => brushInc()}>
          ➕
        </div>
        <div className='brushDes' onClick={() => brushDesc()}>
          ➖
        </div>
        <div className='clear' onClick={() => clearRect()}>
          ❌
        </div>
      </div>
    </Draw>
  );
}

const Draw = styled.div`
  align-self: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 80vw;
  position: relative;

  .toolbar {
    display: flex;
    padding: 10px 5px;
    font-size: 1.2em;
    align-items: center;
    position: absolute;
    justify-content: space-around;
    width: 150px;
    top: 0;
    right: 0;
    z-index: 100;
    background: white;
    cursor: pointer;
  }

  #primary_color {
    border-radius: 50%;
    height: 25px;
    width: 25px;
    border: none;
    outline: none;
    -webkit-appearance: none;
  }

  #primary_color::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  #primary_color::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }
`;
