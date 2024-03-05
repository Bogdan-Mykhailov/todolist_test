import styled, { css } from "styled-components"

export const NotificationWrapper = styled.div<{ isVisible: boolean }>`
  background-color: #f5c6cb;
  color: #721c24;
  border: 1px solid transparent;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  ${( { isVisible } ) =>
    !isVisible &&
  css`
      display: none;
    `}
`

export const CloseButton = styled.button`
  position: relative;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
  cursor: pointer;
  background: transparent;
  border: 0;
`
