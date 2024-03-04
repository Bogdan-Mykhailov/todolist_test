import styled from "styled-components"

export const AddTodoWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const Button = styled.img`
    position: absolute;
    left: 20px;
    width: 20px;
    height: 20px;
    opacity: .1;
    
    &.completed {
        opacity: 1;
    }
`

export const Input = styled.input`
    background: rgba(0, 0, 0, .01);
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,.03);
    font-family: LexendLight, sans-serif;
    font-size: 24px;
    line-height: 1.4em;
    outline-color: #a4a4a4;
    padding: 16px 16px 16px 60px;
    width: 100%;
    box-sizing: border-box;
`
