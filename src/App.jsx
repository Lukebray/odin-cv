import "./App.css"
import "./components/GeneralInfo"
import { useState } from "react"
import Header from "./components/Header"
import GeneralInfo from "./components/GeneralInfo"
import EducationContainer from "./components/EducationContainer"
import Education from "./components/Education"

function App() {
	const [isEditing, setIsEditing] = useState(false)
	const [educationEntries, setEducationEntries] = useState([])

	const addEducation = () => {
		let edu = {
			id: crypto.randomUUID(),
			school: "",
			degree: "",
			from: "",
			to: "",
		}

		setEducationEntries([...educationEntries, edu])
	}

	const deleteEducation = (education) => {
		//TODO
		const newArr = educationEntries.filter(
			(educationEntry) => educationEntry.id !== education.id
		)
		setEducationEntries(newArr)
		console.log(education.id)
	}

	return (
		<>
			<Header isEditing={isEditing} setIsEditing={setIsEditing} />
			<GeneralInfo isEditing={isEditing} />
			<EducationContainer
				isEditing={isEditing}
				educationEntries={educationEntries}
				addEducation={addEducation}
				deleteEducation={deleteEducation}
			/>
		</>
	)
}

export default App
