import styled from "styled-components"

export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: var(--white);
    border-bottom: 1px solid var(--borderLight);
`

export const HeaderLogo = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
`


export const HeaderTitle = styled.h2`
    font-size: 24px;
    font-family: LexendMedium, sans-serif;
    color: var(--font);
`

export const HeaderTasksCount = styled.h2`
    font-size: 18px;
    font-family: LexendLight, sans-serif;
    color: var(--fontExtra);
`
