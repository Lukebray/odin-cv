import { useState } from "react"
import "../App.css"
import Education from "./Education"

function EducationContainer({
	isEditing,
	educationEntries,
	addEducation,
	deleteEducation,
}) {
	return (
		<>
			<div>
				<h3>Education</h3>
				{educationEntries.map((education) => (
					<div key={education.id}>
						<Education isEditing={isEditing} data={education} />
						<DeleteButton
							education={education}
							deleteEducation={() =>
								deleteEducation(education)
							}></DeleteButton>
						<hr></hr>
					</div>
				))}
			</div>
			{isEditing ? (
				<button type="button" onClick={() => addEducation()}>
					Add Education
				</button>
			) : (
				""
			)}
		</>
	)
}

function DeleteButton({ deleteEducation }) {
	return (
		<>
			<div>
				<button type="button" onClick={() => deleteEducation()}>
					Delete
				</button>
			</div>
		</>
	)
}

export default EducationContainer
