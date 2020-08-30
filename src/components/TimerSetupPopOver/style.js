import styled from 'styled-components'

export const StyledTimeSetupPopOver = styled.div`
  background: rgba(40,40,40,0.95);
  padding: 16px 20px 20px;
  margin-top: 4px;
  border-radius: 8px;
  text-align: left;

  label {
    display: block;
    font-size: 0.8em;
    margin-bottom: 4px;
  }

  fieldset {
    margin-top: 12px;

    &:first-child {
      margin-top: 0;
    }
  }
`

export const ButtonRow = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: flex-end;
  button {
    margin-left: 8px;
  }
`