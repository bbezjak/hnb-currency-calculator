import { fetchData } from "../../../utils";

export async function hnbFetch() {

    //
    // Neccesary to use CORS proxy, to see list of alternatives follow link
    // https://nordicapis.com/10-free-to-use-cors-proxies/

    //const api = 'https://cors-anywhere.herokuapp.com/' + "http://api.hnb.hr/tecajn/v2"; 
    const api = 'https://thingproxy.freeboard.io/fetch/' + "http://api.hnb.hr/tecajn/v2"
    const method = "GET";

    let retData = "hnb_ret_data";
    await fetchData(api, method).then(response => {
        debugger;
        retData = response;
    })

    return retData;
}