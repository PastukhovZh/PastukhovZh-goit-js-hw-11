import axios from "axios"
const KEY = '29365931-b63e8f402cdf0b6e76f683c05'

async function fetchPictures(usersInput, page, perPage) {
    return await axios.get(`https://pixabay.com/api/?key=${KEY}&q=${usersInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
}

export { fetchPictures };