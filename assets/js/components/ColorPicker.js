import { ColorPickerStyle } from '../style';
export default function ColorPicker( props ) {
	const { id, textColor, handler } = props;
	return (
		<ColorPickerStyle className="helpgent-color-picker">
			<span className="helpgent-color-picker__text">{ textColor }</span>
			<label
				htmlFor={ `${ id }` }
				className="helpgent-color-picker__trigger"
				style={ { backgroundColor: textColor } }
			></label>
			<input
				type="color"
				id={ `${ id }` }
				name={ `${ id }` }
				value={ `${ textColor.trim() }` }
				onChange={ handler }
			/>
		</ColorPickerStyle>
	);
}
