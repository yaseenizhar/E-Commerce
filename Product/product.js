function product() {

    const customertype = localStorage.getItem("CustomerType");


    let data = "";

    fetch("http://127.0.0.1:8089/product")
        .then((res) => {
            return res.json()
        })
        .then((resource) => {

            for (let i = 0; i < resource.length; i++) {
                data +=

                    `
                <div class="col">
                <div class="card shadow-sm">
                <img src="${resource[i].ImageUrl}" alt="Image Not Load" style="width: 100%; height: 30rem; object-fit: cover;">
                  <div class="card-body">
                    <h2>${resource[i].Title}</h2>
                    <p class="card-text">${resource[i].Description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      <button type="button" id = "productTableButton" class="btn btn-sm btn-outline-secondary" onclick="create(${resource[i].ID})">Create</button>
                      <button type="button" id = "productTableButton" class="btn btn-sm btn-outline-secondary" onclick="update(${resource[i].ID})">Edit</button>
                      <button type="button" id = "productTableButton" class="btn btn-sm btn-outline-secondary" onclick="deletdata(${resource[i].ID})">Delete</button>
                        <button type="button" id = "productTableButton" class="btn btn-sm btn-outline-secondary" onclick="productview(${resource[i].ID})">View</button>
                      </div>
                      <small class="text-body-secondary"><h4>${resource[i].Price} $</h4></small>
                    </div>
                  </div>
                </div>
              </div>
                `

                console.log("Image Resource", resource[i].ImageUrl)

            }
            document.getElementById("album").innerHTML = data

            if (customertype == 'Customer') {
                document.querySelectorAll("#productTableButton").forEach(item => {
                    item.style.display = "none";
                });
            }
        })

}


function update(ID) {

    fetch(`http://127.0.0.1:8089/product/${ID}`)
        .then((data) => {
            return data.json()
        })
        .then((res) => {
            console.log()
        })


    localStorage.setItem("productID", ID);
    window.location.href = "./tableupdate.html"
}


function deletdata(ID) {
    fetch(`http://127.0.0.1:8089/product/${ID}`, {
        method: 'DELETE',
    })

        .then((data) => {
            product();
        })
}


window.onload = function () {
    product()
}



function create() {
    window.location.href = "./productcreate.html"
}




const id = localStorage.getItem("customerId")
console.log(id)


fetch(`http://127.0.0.1:8089/customer/${id}`)
    .then((res => {
        return res.json()
    }))
    .then((datas) => {
        // console.log(datas.Type)
        document.getElementById("user").innerHTML = `<i class="fa-solid fa-user"></i> : ${datas.Type}`
    })

function productview(ID) {

    localStorage.setItem("ProductId", ID)
    window.location.href = "/Product/productview.html"
}