

async function getUsers() {
    const res = await axios.get('https://hackorsnoozev3.docs.apiary.io/#introduction/authentication')
    console.log(res);
}

async function signUp(username, password, name)  
const user = await axios.post('', {
    user: {name, username, password}
})
getUsers();