import { useRef, useEffect } from "react";

export default function CanvasGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellSize = 10;
  const rows = 50;
  const columns = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx !== null) {
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < columns; j++) {
            ctx.fillStyle = "black";
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
          }
        }
      }
    }
  }, [canvasRef.current]);

  const handleCellClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const x = Math.floor(event.nativeEvent.offsetX / cellSize);
        const y = Math.floor(event.nativeEvent.offsetY / cellSize);
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
    />
  );
}
