import { useParams } from "react-router-dom";

function GuidChild() {
	const { guid } = useParams();
	return (
		<>
			<p>This is Guid Child - {guid}</p>
		</>
	);
}

export default GuidChild;
