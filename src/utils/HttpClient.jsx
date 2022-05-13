const API = 'https://reqres.in/api/users';

// Get data
export const users=()=>{
    const list = fetch(`${API}`).then(response=>response.json())
    return list
}