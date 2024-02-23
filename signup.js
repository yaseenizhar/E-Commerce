function signup() {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if(name != "" && email != "" && password != ""){
    let objectdata = {
        ID: 0,
        Name: name,
        Email: email,
        Password: password,
        Type: "Customer"
    }

    

    // localStorage.setItem("Name", name)
    localStorage.setItem("Type", "customers")


    let jsondata = (JSON.stringify(objectdata))

    console.log(jsondata)

    let options = {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: jsondata,
    }



    fetch("http://127.0.0.1:8089/customer", options)
        .then((data) => {
            window.location.href = "./login.html"
        })
        .then((res) => {
            console.log(res)
        })
        

    }else{
        alert("All Fields are required")
    }
}
