import axios from 'axios';
const URL = "/cors-proxy/https://urlshortdev.herokuapp.com/api/"


export const checkURL = async (shortURL) => {
    let body = await axios.get(URL + "shortUrl");
    let flag = 0;
    body.data["allUrls"].forEach(element => {
        if (element["shortUrl"] === shortURL) {
            flag = 1;
        }
    });
    return flag;
}


export const getURL = async (shortURL) => {
    let body = await axios.get(URL + shortURL);
    console.log(body.data);
    return body.data["shortUrl"]["fullUrl"];
}

export const addURL = async (url, shortURL) => {
    await axios.post(URL+"shortUrl", {
        "fullUrl" : url,
        "shortUrl" : shortURL
    }).then(response => {
        console.log("Submitted successfully");
    }).catch(error => {
        console.log(error);
    });
    };


