import { useRef, useEffect, useState } from "react";

interface CanvasGridProps {
  rows: number;
  columns: number;
  cellSize: number;
}

export default function CanvasGrid(props: CanvasGridProps) {
  const { rows, columns, cellSize } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasWidth, setCanvasWidth] = useState<number>(0);
  const [canvasHeight, setCanvasHeight] = useState<number>(0);
  
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      setCanvasWidth(canvas.offsetWidth);
      setCanvasHeight(canvas.offsetHeight);
      const ctx = canvas.getContext('2d');
      if(ctx) {
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < columns; j++) {
            console.log('stroke')
            ctx.strokeStyle = '#262626';
            ctx.strokeRect(i * cellSize, j * cellSize, cellSize, cellSize);
          }
        }
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef, rows, columns, cellSize]);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (canvas) {
  //     const ctx = canvas.getContext("2d");
  //     if (ctx !== null) {
  //       for (let i = 0; i < rows; i++) {
  //         for (let j = 0; j < columns; j++) {
  //           ctx.fillStyle = "black";
  //           ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
  //         }
  //       }
  //     }
  //   }
  // }, [canvasRef.current, canvasWidth, canvasHeight, cellSize, rows, columns]);

  const handleCellClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        console.log('event', event.nativeEvent)
        const x = Math.floor((event.nativeEvent.offsetX / canvasWidth) * columns);
        const y = Math.floor((event.nativeEvent.offsetY / canvasHeight) * rows);
        ctx.fillStyle = "white";
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={cellSize * columns}
      height={cellSize * rows}
      onClick={handleCellClick}
      style={{maxWidth: '100%', maxHeight: '100%', background: 'black'}}
    />
  );
}

CanvasGrid.defaultProps = {
  cellSize: 10,
  rows: 16,
  columns: 16,
}