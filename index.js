// Add your code here
function submitData(name, email) {
    const data = {name: name, email: email};
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(json => {
        const newId = json.id;
        document.body.innerHTML += newId;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }
  console.log(submitData("John Doe", "johndoe@example.com"));
  

