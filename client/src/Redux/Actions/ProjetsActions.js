// We instantiate the name of the action in a variable
export const AXIOS_PROJECTS = 'AXIOS_PROJECTS';
export const DISPATCH_PROJECTS = 'DISPATCH_PROJECTS'

// We create a type of action allowing us to recognize it to trigger the requests axios
export const actionAxiosProjects = () => ({
    type: AXIOS_PROJECTS
})

export const actionDispatchProjects = (projects) => ({
    type: DISPATCH_PROJECTS,
    payload : {
        projects
    }
})