async function get(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET',})
    return await response.json()

}
async function post(data: object){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return await response.json();
}
async function put(data: {id:number, title: string, body:string}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    });
    return await response.json();
}
async function remove(id:number){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
}

export {get, post, put, remove};