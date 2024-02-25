import { createLazyFileRoute } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div>
			<h1>Home page</h1>
		</div>
	);
}

export default Index;
