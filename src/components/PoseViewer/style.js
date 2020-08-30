import styled from 'styled-components'

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  place-self: center;
`

export const Stage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
  
export const Pose = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  transition: opacity 500ms ease-in-out;
  opacity: 0%;
  ${({ visible }) => visible ? `opacity: 100%;` : `opacity: 0%;`}
`

export const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
`

export const TimerControl = styled.div`
  position: absolute;
  margin: 8px;
  top: 0;
  right: 0;
  text-align: right;
`
export const TimerButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  background-color: black;
  border: none;
  font-size: 1em;
  &:hover {
    background-color: #222;
  }
  ${({ setupVisible }) => setupVisible && `
    background-color: #222;
  `}
`
