import { CanvasColorState, CanvasCoodinateState, CanvasRefState } from '@/atom';
import { useRef, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CanvasCoodi } from '@/interface/index'
import { CanvasColor } from '@/assets/constant/constant'

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
    const canvasBrushColor = useRecoilValue(CanvasColorState);
    const setCanvasRef = useSetRecoilState<any>(CanvasRefState);
    const [canvasCoodinate, setCanvasCoodinate] = useRecoilState<CanvasCoodi[]>(CanvasCoodinateState);

    const handleResize = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            setCanvasRef(canvas); // save 컨트롤을 위한 ref 상태관리
            setCanvasWidth(canvas.offsetWidth);
            setCanvasHeight(canvas.offsetHeight);
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                //TODO 원래 색칠한 것 갖고있어야함
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < columns; j++) {
                        ctx.strokeStyle = CanvasColor.strokeColor;
                        ctx.strokeRect(
                            j * cellSize,
                            i * cellSize,
                            cellSize,
                            cellSize
                        );
                    }
                }
                canvasCoodinate.map((item) => {
                    ctx.fillStyle = item.color;
                    ctx.fillRect(item.x * cellSize, item.y * cellSize, cellSize, cellSize)
                })
            }
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [canvasRef, rows, columns, cellSize, canvasCoodinate]);

    const handleCellClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const x = Math.floor(
                    (event.nativeEvent.offsetX / canvasWidth) * columns
                );
                const y = Math.floor(
                    (event.nativeEvent.offsetY / canvasHeight) * rows
                );
                ctx.fillStyle = canvasBrushColor;
                const coodinate = {
                    x: x,
                    y: y,
                    color: canvasBrushColor,
                }

                // 캔버스의 상태 저장
                setCanvasCoodinate((prev) => [...prev, coodinate])
                
                ctx.strokeStyle = CanvasColor.strokeColor;
                ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
            }
        }
    };

    return (
        <canvas
            ref={canvasRef}
            width={cellSize * columns}
            height={cellSize * rows}
            onClick={handleCellClick}
            style={{
                maxWidth: '100%',
                maxHeight: '100%',
                background: CanvasColor.canvasBackgroundColor,
            }}
        />
    );
}

CanvasGrid.defaultProps = {
    cellSize: 10,
    rows: 16,
    columns: 16,
};
