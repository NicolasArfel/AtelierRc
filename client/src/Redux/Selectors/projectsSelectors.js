export function findProject(ProjectsReducer, searchedSlug) {
    const projet = ProjectsReducer.find((findedProject) => {
        return findedProject.slug === searchedSlug;
    })
    return projet;
}