import styled from "styled-components"

export const TodoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    position: relative;
`

export const Container = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;

    @keyframes keyframes-fill {
        0% {
            transform: scale(0);
            opacity: 0;
        }

        50% {
            transform: scale(1.2) rotate(15deg);
        }
    }
`

export const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
`

export const RegularIcon = styled.img`
    position: absolute;
    left: 20px;
    animation: keyframes-fill .5s;
    z-index: 1;

    &.completed {
        display: none;
    }
`

export const SolidIcon = styled.img`
    position: absolute;
    left: 20px;
    display: none;
    animation: keyframes-fill .5s;
    z-index: 1;
    
    &.completed {
        display: block;
    }
`

export const EditInput = styled.input`
    padding: 12px 50px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0,0,0,.2);
    outline-color: #a4a4a4;
    color: #4d4d4d;
    width: 100%;
    font-size: 24px;
    line-height: 1.4em;
    font-family: LexendLight, sans-serif;
`

export const ListItem = styled.span`
    padding: 12px 50px;
    transition: color .4s;
    word-break: break-all;
    border: 1px solid transparent;
    border-bottom: 1px solid #ededed;
    width: 100%;
    font-size: 24px;
    justify-items: stretch;
    line-height: 1.4em;
    color: #4d4d4d;
    font-family: LexendLight, sans-serif;
    opacity: 1;
    
    &.completed {
        opacity: .3;
        text-decoration: line-through;
    }
`

export const Xmark = styled.img`
    width: 20px;
    height: 20px;
    margin-left: auto;
    position: absolute;
    right: 20px;
`
