function productcategory() {

    let table = "";

    fetch("http://127.0.0.1:8089/category")
        .then((data) => {
            return data.json()
        })

        .then((response) => {

            for (let i = 0; i < response.length; i++) {
                table +=


                    `
                    <div class="col">
                    <div class="card shadow-sm">
                      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                      <div class="card-body">
                        <h2>${response[i].Name}</h2>
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary" onclick="createproduct(${response[i].ID})">Create</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary" onclick="update(${response[i].ID})">Edit</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary" onclick="categorydlt(${response[i].ID})">Delete</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="productview(${response[i].ID})">View</button>
                          </div>
                          <small class="text-body-secondary"><h4>80 $</h4></small>
                        </div>
                      </div>
                    </div>
                  </div>
                 `
                 
                document.getElementById("album").innerHTML = table
            }
        })
}



function categorydlt(ID) {
    fetch(`http://127.0.0.1:8089/category/${ID}`, {
        method: 'DELETE',
    })
        .then((data) => {
            productcategory();
            console.log(ID)
        })


}

window.onload = function () {
    productcategory();
}


function update(ID) {

    fetch(`http://127.0.0.1:8089/category/${ID}`)
        .then((data) => {
            return data.json()
        })
        .then((response) => {

            let name = response.Name
            let id = response.ID


            console.log(name)
            console.log(response.ID)

            localStorage.setItem("Name", name)
            localStorage.setItem("ID", id)

            window.location.href = "./categoryupdate.html"
        })

}


function createproduct() {
    window.location.href = "./categoryinsert.html"
}


function productview(ID) {

    fetch(`http://127.0.0.1:8089/category/${ID}`)
        .then((res) => {
            return res.json()
        })

        .then((data) => {
            let categ = data.Name
            console.log(categ)

            localStorage.setItem("Category", categ)

            window.location.href = "./view.html"
        })
}