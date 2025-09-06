import { useState } from "react"
import "../App.css"
import InputField from "./InputField"

function Education({ isEditing, data }) {
	const [education, setEducation] = useState({
		id: data.id,
		school: data.school,
		degree: data.degree,
		from: data.from,
		to: data.to,
	})

	const updateField = (fieldName) => {
		return (value) => {
			setEducation({ ...education, [fieldName]: value })
		}
	}

	return (
		<>
			<div>
				{isEditing ? (
					<form>
						<InputField
							value={education.school}
							fieldLabel="School"
							type="text"
							onChangeEvent={updateField("school")}
						/>

						<InputField
							value={education.degree}
							fieldLabel="Degree"
							type="text"
							onChangeEvent={updateField("degree")}
						/>

						<InputField
							value={education.from}
							fieldLabel="From"
							type="date"
							onChangeEvent={updateField("from")}
						/>

						<InputField
							value={education.to}
							fieldLabel="To"
							type="date"
							onChangeEvent={updateField("to")}
						/>
					</form>
				) : (
					<div>
						<p>School: {education.school}</p>
						<p>Degree: {education.degree}</p>
						<p>From: {education.from}</p>
						<p>To: {education.to}</p>
					</div>
				)}
			</div>
		</>
	)
}

export default Education
