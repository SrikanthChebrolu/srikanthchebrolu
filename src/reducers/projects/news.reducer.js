import {
    GET_LATEST_NEWS
} from '../../actions/news.action'

export function getLatestNews(state = {
    news: [],
}, action) {
    switch (action.type) {
        case GET_LATEST_NEWS:
            return Object.assign({}, state, {news: action.payload.news});
        default:
            return state
    }
};