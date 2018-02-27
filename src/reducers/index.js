import { combineReducers } from 'redux'
import {postsBySubreddit, selectedSubreddit} from './projects/githubprojects.reducer';

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
});

export default rootReducer;