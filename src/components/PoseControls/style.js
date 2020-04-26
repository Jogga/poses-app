import styled, { css } from 'styled-components'

export const BasePoseButton = css`
  border-width: 2px;
  border-style: solid;
  border-color: #444;
  background-color: rgba( 50, 50, 50, 0.8);
  color: white;
  padding: 10px;
  min-width: 100px;
`

export const BackButton = styled.button`
  ${ BasePoseButton };
`

export const NextButton = styled.button`
  ${ BasePoseButton };
`

export const PlayPauseButton = styled.button`
  ${ BasePoseButton };
`

export const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`