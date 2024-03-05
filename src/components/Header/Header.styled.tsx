import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 20px;
    box-shadow: inset 0 -1px 5px 0 rgba(0,0,0,.2);
`

export const HeaderLogo = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
`

export const HeaderTitle = styled.h2`
    text-rendering: optimizeLegibility;
    color: rgba(175, 47, 47, .15);
    font-size: 45px;
    font-weight: 100;
    text-align: center;
    font-family: LexendLight, sans-serif;
`

export const HeaderTasksCount = styled.h2`
    font-size: 18px;
    font-family: LexendLight, sans-serif;
    color: #4d4d4d;
`
