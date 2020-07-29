import { fetchData } from "../../../utils";

export async function hnbFetch() {

    const api = 'https://cors-anywhere.herokuapp.com/' + "http://api.hnb.hr/tecajn/v2";
    //const api = "https://pokeapi.co/api/v2/";
    const method = "GET";

    let retData = "hnb_ret_data";
    await fetchData(api, method).then(response => {
        debugger;
        retData = response;
    })

    return retData;
}