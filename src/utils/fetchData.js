export async function fetchData(api, method, body = {}) {
    
    let returnData = "";

    debugger;
    await fetch(api, {
        method : method
    })
        .then(response => response.json())
        .then(data => returnData = data)
        .catch(error => {
            debugger;
            console.error('Error:', error);
            returnData = error;
        })

    debugger;
    return returnData;
}