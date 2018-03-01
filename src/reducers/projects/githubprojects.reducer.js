import {
    GET_USER_GITHUB_REPOSITORIES
} from '../../actions/projects/githubprojects.action'

export function getRepositories(state = {
    repos: [],
}, action) {
    switch (action.type) {
        case GET_USER_GITHUB_REPOSITORIES:
            return Object.assign({}, state, {repos: action.payload.repos});
        default:
            return state
    }
};