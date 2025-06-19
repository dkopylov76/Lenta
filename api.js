const server = "https://wedev-api.sky.pro/api/v1/dkopylov"

export const fetchComments = () => {
    return fetch(server + "/comments").then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}