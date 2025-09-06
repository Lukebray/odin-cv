import "../App.css"

function Header({ isEditing, setIsEditing }) {
	return (
		<>
			<div>
				<h1>My CV</h1>
				{isEditing ? (
					<button type="Button" onClick={() => setIsEditing(false)}>
						Save
					</button>
				) : (
					<button type="Button" onClick={() => setIsEditing(true)}>
						Edit CV
					</button>
				)}
			</div>
		</>
	)
}

export default Header
