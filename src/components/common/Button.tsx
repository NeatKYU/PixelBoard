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
    width: 60px;
    height: 30px;

    border-radius: 5px;
    background-color: #000000;
    color: white;
`;
