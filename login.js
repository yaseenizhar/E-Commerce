document.getElementById("loginBtn").addEventListener('click', function () {
    authenicationCheck();
});


function authenicationCheck() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if (email != "" && password != "") {

        let objectdata = {
            Email: email,
            Password: password
        }

        console.log(objectdata)

        let jsondata = (JSON.stringify(objectdata))

        let options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: jsondata,
        }



        fetch("http://127.0.0.1:8089/customer/authenticate", options)
            .then((res) => {
                console.log('data2: ', res);
                return res.json();
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log('data: ', res);
                    localStorage.setItem("customerId", res.customerId);
                    localStorage.setItem("CustomerType", res.type);
                    // alert("Login success");
                    window.location.href = '../product/product.html';
                }

                // if (res.status === 401) {
                //     alert("Incorrect email or password");
                // }
                // else if (res.status === 500) {
                //     alert("Server error. Please try again later.");
                // }

            })


            .catch((err) => {
                console.log(err);
            });

    }


    else if (email === "") {
        alert(
            "please insert Email"
        )
    }

    else if (password === "") {
        alert(
            "please insert Password"
        )
    }

    else {
        alert("Please insert Email Password")
    }


}


