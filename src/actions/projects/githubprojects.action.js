import fetch from 'isomorphic-fetch';
export const GET_USER_GITHUB_REPOSITORIES = 'GET_FORMULATION_BUFFER_DATA';
export function fetchReos() {
    return function (dispatch) {
        return fetch('https://api.github.com/users/srikanthchebrolu/repos').then(req => req.json())
            .then(req => dispatch(getFormulationBuffer(req)))
    };
}

export function getFormulationBuffer(repos) {
    return {
        type: GET_USER_GITHUB_REPOSITORIES,
        payload: {
            repos
        }
    }
}