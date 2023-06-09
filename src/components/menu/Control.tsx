import styled from 'styled-components'
import { Button } from '@/components/common/Button'
import { FaUpload, FaDownload } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import { CanvasCoodinateState, CanvasRefState, CanvasSizeState } from '@/atom'

export const Control = () => {

	const canvasRef = useRecoilValue<any>(CanvasRefState);
	const size = useRecoilValue(CanvasSizeState);
	const canvasCoodinate = useRecoilValue(CanvasCoodinateState);

	const handleDownload = () => {
        const canvas = canvasRef;
        if(canvas) {
            const link = document.createElement('a');
            link.download = 'drawing.png';
			const ctx = canvas.getContext('2d');
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			canvasCoodinate.map((item) => {
				ctx.fillStyle = item.color;
				ctx.fillRect(item.x * size, item.y * size, size, size)
			})
            link.href = canvas.toDataURL();
            link.click();
        }
    };

	return (
		<Container>
			<Button onClick={handleDownload} fullHegiht style={{ flex: 1 }}>
				<FaDownload />
			</Button>
			<Button onClick={() => null} fullHegiht style={{ flex: 1 }}>
				<FaUpload />
			</Button>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 100px;
	background-color: #2e2e2e;

	display: flex;
	
	position: absolute;
	bottom: 0;
	left: 0;
`