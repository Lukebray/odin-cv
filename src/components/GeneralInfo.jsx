import { useState } from "react"
import "../App.css"
import InputField from "./InputField"

function GeneralInfo({ isEditing }) {
	const [info, setInfo] = useState({
		name: "",
		email: "",
		phone: "",
	})

	const updateField = (fieldName) => {
		return (value) => {
			setInfo({ ...info, [fieldName]: value })
		}
	}

	return (
		<>
			<div>
				<h3>General Info</h3>

				{isEditing ? (
					<form>
						<InputField
							value={info.name}
							fieldLabel="Name"
							type="text"
							onChangeEvent={updateField("name")}
						/>

						<InputField
							value={info.email}
							fieldLabel="Email"
							type="email"
							onChangeEvent={updateField("email")}
						/>

						<InputField
							value={info.phone}
							fieldLabel="Phone"
							type="text"
							onChangeEvent={updateField("phone")}
						/>
					</form>
				) : (
					<div>
						<p>Name: {info.name}</p>
						<p>Email: {info.email}</p>
						<p>Phone: {info.phone}</p>
					</div>
				)}
			</div>
		</>
	)
}

export default GeneralInfo
