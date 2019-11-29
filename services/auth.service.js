import axios from 'axios';

const domain = 'http://localhost:5000'

const signUp = (body) => {
    const url = `${domain}/api/signup`
    return axios.post(url, body).then(res => res)
};

const signIn = (body) => {

    const url = `${domain}/api/user/login`
    return axios.post(url, body, {
        headers: {
            "Content-Type" : "application/json",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive"
        }
    })
    .then(res => {
        console.log(res)
    });
};

export {
    signUp,
    signIn
}