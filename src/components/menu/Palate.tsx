import styled from 'styled-components'
import { SketchPicker } from 'react-color'
import { useRecoilState } from 'recoil';
import { CanvasColorState } from '@/atom';
// interface PlatteProps {

// }

export const Palate = () => {

	const [color, setColor] = useRecoilState(CanvasColorState);

	const handleColor = (color: any, event: any) => {
		setColor(color.hex)
	}

	return (
		<Container>
			<Label>Color</Label>
			<SketchPicker color={color} onChange={handleColor}/>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: 10px auto;
`

const Label = styled.div`
	width: 100%;
	height: auto;

	margin: 20px 5px 15px 5px;

	display: flex;
	justify-content: center;

	color: white;

	font-size: 24px;
	font-weight: bold;
`