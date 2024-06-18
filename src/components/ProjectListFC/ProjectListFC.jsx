export const ProjectListFC = ({ filteredProjects }) => {
    let id = 0;
    return (
        <>
            {filteredProjects.map(project => (
                <div key={id++}>
                    <img
                        src={project.img}
                    />
                </div>
            ))}
        </>
    )
}