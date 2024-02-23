function ProductSubmit() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    let source = document.getElementById("source").value;

    let objectdata = {
        Title: title,
        Description: description,
        Price: price,
        ID: 2,
        AdminID: 1,
        AdminName: "",
        CategoryID: 1,
        CategoryName: "",
        ImageUrl: source,
    }

    let jsondata = (JSON.stringify(objectdata))

    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: jsondata,
    }

    fetch('http://127.0.0.1:8089/product', options)
        .then((data) => {
            console.log(data)
            window.location.href = "./product.html"
        })
        .catch((error) => {
            console.error("Error", error)
        })
}
