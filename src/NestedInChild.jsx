import { useParams } from "react-router-dom";

function NestedInChild() {
	const { value } = useParams();
	return (
		<>
			<p>This is a message from a route three nests deep! - {value}</p>
		</>
	);
}

export default NestedInChild;
