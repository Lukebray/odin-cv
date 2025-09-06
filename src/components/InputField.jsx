import "../App.css"

function InputField({ value, fieldLabel, onChangeEvent, type }) {
	return (
		<>
			<label htmlFor={fieldLabel}>{fieldLabel}</label>
			<input
				name={fieldLabel}
				type={type}
				value={value}
				onChange={(event) => onChangeEvent(event.target.value)}
			/>
		</>
	)
}

export default InputField
