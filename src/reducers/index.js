import { combineReducers } from 'redux'
import { getRepositories } from './projects/githubprojects.reducer';

const rootReducer = combineReducers({
    getRepositories
});

export default rootReducer;