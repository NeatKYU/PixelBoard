//lib
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { CanvasHeightState, CanvasSizeState, CanvasWidthState } from '@/atom';

//components
import CanvasGrid from '@/components/common/CanvasGrid';
import { SizeSetting } from '@/components/menu/SizeSetting';
import { Palate } from '@/components/menu/Palate';
import { Control } from '@/components/menu/Control';

export default function DefaultLayout() {
    const CanvasWidth = useRecoilValue(CanvasWidthState);
    const CanvasHeight = useRecoilValue(CanvasHeightState);
    const CanvasSize = useRecoilValue(CanvasSizeState);

    return (
        <Body>
            <CanvasCotainer>
                <CanvasGrid cellSize={CanvasSize} columns={CanvasWidth} rows={CanvasHeight} />
            </CanvasCotainer>
            <MenuContainer>
                <SizeSetting/>
                <Palate/>
                <Control/>
            </MenuContainer>
        </Body>
    );
}
const Body = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;

    display: flex;
`;

const CanvasCotainer = styled.div`
    // TODO min width setting
    /* min-width: ; */
    width: 70%;
    min-height: 100vh;
    height: auto;

    padding: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: lightgray;
`;

const MenuContainer = styled.div`
    // TODO min width setting
    /* min-width: ; */
    width: 30%;
    height: 100vh;

    padding: 1rem;

    position: sticky;
    top: 0;
`;


