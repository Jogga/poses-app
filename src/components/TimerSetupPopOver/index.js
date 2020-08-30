import React from 'react'
import { StyledTimeSetupPopOver, ButtonRow } from './style'

function TimerSetupPopOver({ duration, preparationTime, onCancel, onApply }) {
  const dur = duration / 1000;
  const prep = preparationTime / 1000;
  const apply = () => {
    onApply(12000, 3000);
  }
  return(
    <StyledTimeSetupPopOver>
      <fieldset>
        <label htmlFor='duration'>Duration (seconds)</label>
        <input type="number" id="duration" name="duration" min="1" placeholder={dur}/>
      </fieldset>
      <fieldset>
        <label htmlFor='preparation'>Preparation time (seconds)</label>
        <input type="number" id="preparation" name="preparation" min="1" placeholder={prep} />
      </fieldset>
      <ButtonRow>
        <button className='secondary' onClick={onCancel}>Cancel</button>
        <button onClick={apply}>Apply</button>
      </ButtonRow>
    </StyledTimeSetupPopOver>
  );
}

export default TimerSetupPopOver;