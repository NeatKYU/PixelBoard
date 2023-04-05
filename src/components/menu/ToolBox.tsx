import styled from 'styled-components'
import { TiPipette } from 'react-icons/ti'
import { TfiBrush, TfiEraser, TfiPaintBucket } from 'react-icons/tfi'
import { useRecoilState } from 'recoil'
import { ToolModeState } from '@/atom'

export const ToolBox = () => {
	const [mode, setMode] = useRecoilState(ToolModeState);

	const handleBrush = () => {
		setMode('brush')
	}

	const handleEraser = () => {
		setMode('eraser')
	}

	const handlePipette = () => {
		setMode('pipette')
	}

	const handlePaint = () => {
		setMode('paint')
	}

	return (
		<Container>
			<ToolContainer onClick={handleBrush}>
				<TfiBrush color={'#e9e9e9'}/>
			</ToolContainer>
			<ToolContainer onClick={handleEraser}>
				<TfiEraser color={'#e9e9e9'}/>
			</ToolContainer>
			<ToolContainer onClick={handlePipette}>
				<TiPipette color={'#e9e9e9'}/>
			</ToolContainer>
			<ToolContainer onClick={handlePaint}>
				<TfiPaintBucket color={'#e9e9e9'}/>
			</ToolContainer>
			<ToolContainer></ToolContainer>
			<ToolContainer></ToolContainer>
		</Container>
	);
}

const Container = styled.div`
	min-width: 200px;
	max-width: 350px;
	width: 50%;
	height: 130px;

	font-size: 25px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	margin: 50px auto 10px auto;
	padding: 5px;
	border: 1px solid lightgray;
	border-radius: 5px;
`

const ToolContainer = styled.div`
	width: calc(100% / 3);
	height: 60px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	&:hover {
		background-color: #2e2e2e;
	}
`