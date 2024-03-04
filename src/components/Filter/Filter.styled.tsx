import styled from "styled-components"

export const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 20px;
`

export const Nav = styled.nav`
    display: flex;
`

export const Link = styled.a`
    border: 1px solid transparent;
    border-radius: 3px;
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    font-family: LexendLight, sans-serif;
    font-size: 12px;

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
    font-size: 12px;
    
    &:hover {
    text-decoration: underline;
}
`
