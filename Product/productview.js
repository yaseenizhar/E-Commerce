let ProductId = localStorage.getItem("ProductId")
let customer_id = localStorage.getItem("customerId")

console.log(ProductId)

window.onload = function () {


    fetch(`http://127.0.0.1:8089/product/${ProductId}`)
        .then((res) => {
            return res.json()
        })

        .then((data) => {
            document.getElementById("title").innerText = `Title : ${data.Title}`
            document.getElementById("description").innerText = `Description : ${data.Description}`
            document.getElementById("price").innerText = `Price : ${data.Price}`
        })
}



fetch(`http://127.0.0.1:8089/product/${ProductId}`)
    .then((res) => {
        return res.json()
    })

    .then((data) => {
        console.log(data.Title)
        document.getElementById("producttitle").innerText = data.Title
        document.getElementById("Description").innerText = data.Description
        document.getElementById("productprice").innerText = `${data.Price} $`

        const svg = document.getElementById("images");

        svg.innerHTML = `<image href="${data.ImageUrl}" width="100%" height="100%" />`

        document.getElementById("editbutton").addEventListener("click", function () {

            fetch(`http://127.0.0.1:8089/product/${ProductId}`)
                .then((data) => {
                    return data.json()
                })
                .then((res) => {
                    window.location.href = "./tableupdate.html"
                })

        })

    })


function openForm() {
    let customerid = document.getElementById("customerid").value = customer_id
    let productid = document.getElementById("productid").value = ProductId


    document.getElementById("orderplace").addEventListener("click", function () {

        let adress = document.getElementById("adress").value
        let dates = document.getElementById("dates").value

        if (!adress || !dates) {
            alert("Please fill in the address and date fields.")
            return;
        }

        let objectdata = {
            "ID": 1,
            "CustomerID": customerid,
            "ProductID": productid,
            "DeliveryAddress": adress,
            "OrderDate": dates,
        }

        let jsondata = JSON.stringify(objectdata)

        console.log(jsondata)

        let options = {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: jsondata
        }

        fetch("http://127.0.0.1:8089/order", options)
            .then((data) => {
                if (data.ok) {
                    window.location.href = "./product.html"
                    alert("Order Place")
                }

                else {
                    alert("Unable to place order")

                }
            }).catch((err) => {
                console.error(error)
            })

    })

}