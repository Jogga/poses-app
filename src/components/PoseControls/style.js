import styled, { css } from 'styled-components'

export const BasePoseButton = css`
  border-width: 0px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  color: black;
  padding: 16px 32px;
  margin: 0 8px;
  cursor: pointer;
  font-size: inherit;
  line-height: 1em;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`

export const BaseIconButton = css`
  ${ BasePoseButton };
  line-height: 0;
  padding: 16px;
`

export const BackButton = styled.button`
  ${ BaseIconButton };
`

export const NextButton = styled.button`
  ${ BaseIconButton };
`

export const PlayPauseButton = styled.button`
  ${ BasePoseButton };
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.1);
  `
export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`

export const Controls = styled.div`
  transition: opacity 200ms ease-in-out;
  opacity: 0%;
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
  ${({ visible }) => visible && `
    opacity: 100%;
  `}
  &:hover {
    opacity: 100%;
  }
`