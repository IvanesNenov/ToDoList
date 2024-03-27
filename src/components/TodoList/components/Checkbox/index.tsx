import React from 'react';
import {CheckboxWrapper} from './index.styles';
import {observer} from 'mobx-react-lite';

interface CheckboxProps {
	checked:boolean,
	handleChangeChecked:()=>void,
	id : string
}


const Checkbox:React.FC<CheckboxProps> = observer(({id,checked,handleChangeChecked}) => {
	return (
		<CheckboxWrapper >
			<input type="checkbox" id={id} data-testid="checkbox"  checked={checked} onChange={handleChangeChecked}/>
			<label htmlFor={id}/>
		</CheckboxWrapper>
	)
});

export default Checkbox