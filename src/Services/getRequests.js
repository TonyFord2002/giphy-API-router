import axios from 'axios'
const RANDOM_URL = 'https://api.giphy.com/v1/gifs/random?api_key=9hlx4ltnmraMl6l5rj6iNa3biohxMs7F'
const trending_url = 'https://api.giphy.com/v1/gifs/trending?api_key=9hlx4ltnmraMl6l5rj6iNa3biohxMs7F'
const search_url = {
    base:'https://api.giphy.com/v1/gifs/search?api_key=9hlx4ltnmraMl6l5rj6iNa3biohxMs7F&q=',
    limit:'&limit=25'
}
export function getRandom(){
const response = axios.get(RANDOM_URL)
return response
}

export function getTrending(){
    const response = axios.get(trending_url)
    return response
}

export function getsearch(input){
    const response = axios.get(search_url.base + input + search_url.limit)
    return response
}