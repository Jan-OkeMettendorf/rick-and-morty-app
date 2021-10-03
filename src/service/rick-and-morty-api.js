export function fetchRickAndMortyApi(url){
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error (`error ${response.status}`)
            }
        })

        // .then(response => fetchNextAndPrevPage(response))
        // .then(response => response.results)
        // .then(response => {...response, response.info.next})
        // .then(page => page.results)
}

export function fetchNextAndPrevPage(){
    return fetchRickAndMortyApi()
}