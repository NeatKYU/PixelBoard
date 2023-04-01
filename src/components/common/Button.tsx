import styled from 'styled-components';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
    color?: string;
    fullWidth?: boolean;
    fullHegiht?: boolean;
    borderRadius?: string;
}

export const Button = (props: ButtonProps) => {
    const { 
        onClick, 
        color,
        style,
        children, 
        fullWidth, 
        fullHegiht, 
        borderRadius 
    } = props;

    return (
        <Container 
            fullWidth={fullWidth || false} 
            fullHeight={fullHegiht || false}
            borderRadius={borderRadius || 'unset'}
            onClick={onClick}
            style={style}
        >
            {children}
        </Container>
    );
};

const Container = styled.div<{fullWidth: boolean, fullHeight: boolean, borderRadius: string}>`
    min-width: ${({ fullWidth }) => fullWidth ? '100%' : '30px'};
    width: auto;
    height: ${({ fullHeight }) => fullHeight ? '100%' : '30px'};;

    padding: 5px 10px;

    border-radius: ${({borderRadius}) => borderRadius};
    background-color: #CCCCCC;
    color: black;
    
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: #cccccce3;
    }

    cursor: pointer;
`;
