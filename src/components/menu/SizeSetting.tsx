import styled from 'styled-components'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { useRecoilState } from 'recoil'
import { CanvasWidthState, CanvasHeightState, CanvasSizeState } from '@/atom'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export const SizeSetting = () => {

    const [canvasWidth, setCanvasWidth] = useRecoilState(CanvasWidthState);
    const [canvasHeight, setCanvasHeight] = useRecoilState(CanvasHeightState);
    const [canvasSize, setCanvasSize] = useRecoilState(CanvasSizeState);

    const handleIncreaseWidth = () => {
        setCanvasWidth((prev) => prev + 1);
    }

    const handleDecreaseWidth = () => {
        setCanvasWidth((prev) => prev - 1);
    }

    const handleIncreaseHeight = () => {
        setCanvasHeight((prev) => prev + 1);
    }

    const handleDecreaseHeight = () => {
        setCanvasHeight((prev) => prev - 1);
    }

    const handleIncreaseSize = () => {
        setCanvasSize((prev) => prev + 1);
    }

    const handleDecreaseSize = () => {
        setCanvasSize((prev) => prev - 1);
    }

    return (
        <Container>
            <Row>
                <Label>canvas width</Label>
                <Input width={'100px'} type={'number'} value={canvasWidth} readonly/>
                <Button onClick={handleIncreaseWidth} borderRadius={'5px'}>
                    <AiOutlinePlus/>
                </Button>
                <Button onClick={handleDecreaseWidth} borderRadius={'5px'}>
                    <AiOutlineMinus/>
                </Button>
            </Row>
            <Row>
                <Label>canvas height</Label>
                <Input width={'100px'} type={'number'} value={canvasHeight} readonly/>
                <Button onClick={handleIncreaseHeight} borderRadius={'5px'}>
                    <AiOutlinePlus/>
                </Button>
                <Button onClick={handleDecreaseHeight} borderRadius={'5px'}>
                    <AiOutlineMinus/>
                </Button>
            </Row>
            <Row>
                <Label>canvas size</Label>
                <Input width={'100px'} type={'number'} value={canvasSize} readonly/>
                <Button onClick={handleIncreaseSize} borderRadius={'5px'}>
                    <AiOutlinePlus/>
                </Button>
                <Button onClick={handleDecreaseSize} borderRadius={'5px'}>
                    <AiOutlineMinus/>
                </Button>
            </Row>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 10px;

`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const Label = styled.div`
    width: 30%;
    height: 100%;

    color: white;
`