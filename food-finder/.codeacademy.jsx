import React, { useEffect } from "react";

export function Thought(props) {
	const { thought, removeThought } = props;

	useEffect(() => {
		setTimeout(() => {
			removeThought(thought.id)
		}, 1000);
	}, [thought])

	const handleRemoveClick = () => {
		removeThought(thought.id);
	};

	return (
		<li className="Thought">
			<button
				aria-label="Remove thought"
				className="remove-button"
				onClick={handleRemoveClick}>
				&times;
			</button>
			<div className="text">{thought.text}</div>
		</li>
	);
}
 