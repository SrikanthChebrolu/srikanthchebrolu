import { combineReducers } from 'redux'
import { getRepositories } from './projects/githubprojects.reducer';
import { getLatestNews } from './projects/news.reducer';

const rootReducer = combineReducers({
    getRepositories,
    getLatestNews
});

export default rootReducer;