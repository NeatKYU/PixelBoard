import styled from 'styled-components'

interface InputProps {
    width: string;
    type: string;
    value: string | number;
    readonly: boolean;
}

export const Input = (props: InputProps) => {
    const { width, type, value, readonly } = props;
    return (
        <Container width={width}>
            <input type={type} value={value || ''} readOnly={readonly}/>
        </Container>
    )
}

const Container = styled.div<{width: string}>`
    width: ${({width}) => width};
    height: 30px;

    padding: 5px 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid white;
    border-radius: 5px;

    
    input {
        width: 100%;
        height: 100%;

        color: white;

        background-color: transparent;
        border: none;
        outline: none;

        text-align: center;
    }

    // type Number일때 옆에 나오는 incre,decre 버튼 삭제
    input::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
`

Input.defaultProps = {
    width: '100%',
    type: 'text',
}