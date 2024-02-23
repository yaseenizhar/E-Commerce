const productID = localStorage.getItem("productID");
console.log(productID)
getProductByID(productID);

function getProductByID(ID) {

    fetch(`http://127.0.0.1:8089/product/${ID}`)
        .then((data) => {
            return data.json()
        })
        .then((res) => {

            const id = res.ID;
            const title = res.Title;
            const description = res.Description;
            const price = res.Price;
            const source = res.ImageUrl;


            document.getElementById('productid').value = id;
            document.getElementById('title').value = title;
            document.getElementById('decription').value = description;
            document.getElementById('price').value = price;
            document.getElementById('product_source').value = source;

        })
}

    function productupdate() {
        
        let title = document.getElementById('title').value
        let desc = document.getElementById('decription').value
        let price = document.getElementById('price').value
        let id = document.getElementById('productid').value
        let product_source = document.getElementById('product_source').value
    
        console.log(title)
        console.log(desc)
        console.log(price)
        console.log(id)
    
    
        let objectdata = {
            "Title": title,
            "Description": desc,
            "Price": price,
            "ID": id,
            "AdminID": 1,
            "AdminName": "",
            "CategoryID": 1,
            "CategoryName": "",
            "ImageUrl": product_source,
    
        }
    
    
        let jsondata = (JSON.stringify(objectdata))
    
        console.log(jsondata)
    
        let options = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: jsondata,
        }
    
        fetch(`http://127.0.0.1:8089/product/${id}`, options)
            .then((response) => {
                window.location.href = "./product.html"
    
            })
            .catch((err) => {
    
            })
    
    }


