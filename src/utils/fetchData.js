export async function fetchData(api, method, body = {}) {
    
    let returnData = "";

    await fetch(api, {
        method : method
    })
        .then(response => response.json())
        .then(data => returnData = data)
        .catch(error => {
            console.error('Error:', error);
            returnData = error;
        })

    return returnData;
}