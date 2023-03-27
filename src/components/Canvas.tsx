import { useEffect, useState } from 'react';
import styled from 'styled-components'

interface CanvasProps {
	width: number;
	height: number;
}

export const Canvas = (props: CanvasProps) => {
	const { width, height } = props;
	const [board, setBoard] = useState(create2DArray(width, height));

	const boardWidth = 100/width;
	const boardHeight = 100/height;

	return (
		<Conatiner>
			{
				board.map((v) => {
					return (
						<div style={{width: '100%', height: boardHeight+'%', display: 'flex'}}>
							{
								v.map(() => {
									return (
										<Pixel width={boardWidth} height={100}/>
									)
								})
							}
						</div>
					)
				})
			}
		</Conatiner>
	)
}

function create2DArray(x:number, y:number) {
	const newArr = [];
	for (let i = 0; i < x; i++) {
		newArr[i] = new Array(y).fill(0);
	}
	return newArr;
}

const Conatiner = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: start;
	justify-content: start;
	flex-wrap: wrap;

	background-color: #2a2a2a;
`

const Pixel = styled.div<{width: number, height: number}>`
	width: ${({width}) => width+'%'};
	height: ${({width}) => width+'%'};

	background-color: aliceblue;
`