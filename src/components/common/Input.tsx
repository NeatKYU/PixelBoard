import styled from 'styled-components'

interface InputProps {

}

export const Input = (props: InputProps) => {
    return (
        <Container>

        </Container>
    )
}

const Container = styled.div`
    width: auto;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: 100%;
        height: 100%;
    }
`