import fetch from 'isomorphic-fetch';
export const GET_LATEST_NEWS = 'GET_LATEST_NEWS';



export function fetchNews() {
    var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8a15eb9c99e2431696683094cb23ee8d&sortBy=popularity'

    return function (dispatch) {
        return fetch(url).then(res => res.json())
            .then(res => dispatch(getLatestNews(res.articles)))
    };
}

export function getLatestNews(news) {
    return {
        type: GET_LATEST_NEWS,
        payload: {
            news
        }
    }
}