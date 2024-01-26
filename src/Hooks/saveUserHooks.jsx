export const saveUserData = (user) =>{
  const currentUser = {
    name: user?.displayName,
    email: user?.email,
  }
  fetch(`http://localhost:5000/users/${user?.email}`,{
    method: "PUT",
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify(currentUser)
  })
  .then(res=> res.json())
  .then(data=>{
    console.log(data);
  })
}