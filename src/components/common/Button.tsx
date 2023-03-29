import styled from 'styled-components';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
    color?: string;
}

export const Button = (props: ButtonProps) => {
    const { onClick, color, children } = props;
    return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled.div`
    min-width: 60px;
    width: auto;
    height: 30px;

    padding: 5px 10px;

    border-radius: 5px;
    background-color: #CCCCCC;
    color: black;
    
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;
