import styled from 'styled-components'
import { TwitterPicker } from 'react-color'
import { useRecoilState } from 'recoil';
import { CanvasColorState } from '@/atom';
// interface PlatteProps {

// }

export const Palate = () => {

	const [color, setColor] = useRecoilState(CanvasColorState);

	const handleColor = (color: any, event: any) => {
		setColor(color.hex)
	}

	console.log('current color', color)

	return (
		<Container>
			<Label>Color</Label>
			<TwitterPicker onChange={handleColor}/>
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

	margin: 5px 0 15px 20px;

	display: flex;
	justify-content: start;

	color: white;

	font-size: 24px;
	font-weight: bold;
`