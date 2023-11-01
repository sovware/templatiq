import Checkbox from './Checkbox.js';
import { components } from 'react-select';

const CheckboxOption = ( props ) => {
	const handleChangeOption = () => {};

	return (
		<div>
			<components.Option { ...props }>
				<Checkbox
					id={ `helpgent-${ props.value }` }
					label={ props.label }
					onChange={ handleChangeOption }
					checked={ props.value === 'all' ? true : props.isSelected }
				/>
			</components.Option>
		</div>
	);
};

export default CheckboxOption;
