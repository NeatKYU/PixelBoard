import styled from 'styled-components'
import { Button } from '@/components/common/Button'
import { FaUpload, FaDownload } from 'react-icons/fa'

export const Control = () => {

	return (
		<Container>
			<Button onClick={() => null} fullHegiht style={{ flex: 1 }}>
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