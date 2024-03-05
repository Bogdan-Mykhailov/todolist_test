import styled from 'styled-components'

export const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,.2),
    0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0,0,0,.2),
    0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0,0,0,.2);
`

export const Nav = styled.nav`
    display: flex;
`

export const ActiveTodosCounter = styled.span`
    font-family: LexendLight, sans-serif;
    font-size: 14px;
    color: #4d4d4d;
    width: 80px;
`

export const Link = styled.a`
    border: 1px solid transparent;
    border-radius: 3px;
    color: #4d4d4d;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    font-family: LexendLight, sans-serif;
    font-size: 14px;

    &.selected {
        border-color: rgba(175, 47, 47, .2);
    }
    
    &:hover {
        border-color: rgba(175, 47, 47, .1);
    }
    
`
export const Button = styled.button`
    border: none;
    background: none;
    font-family: LexendLight, sans-serif;
    font-size: 14px;
    color: #4d4d4d;
    
    &:hover {
    text-decoration: underline;
}
`
