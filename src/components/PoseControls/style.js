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
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  opacity: 0%;
  transition: opacity 200ms ease-in-out;

  ${({ visible }) => visible && `
    opacity: 100%;
  `}
  &:hover {
    opacity: 100%;
  }
`

export const Centered = styled.div`
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
`