import { ALL_PROJECTS } from "../config";
import { RouteHeading } from "@/components/route-heading";
import { ProjectLink } from "@/components/project-link";
import { Section } from "@/components/section";

const Projects = () => {
	return (
		<>
			<Section id="projects">
				<RouteHeading
					heading="Projects"
					description="a haven for the project that went live, "
				/>
				<div className="flex flex-col gap-6">
					{ALL_PROJECTS.map((link) => (
						<ProjectLink key={link.name} link={link} />
					))}
				</div>
			</Section>
		</>
	);
};

export default Projects;
