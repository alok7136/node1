import react, { useState, useEffect } from 'react';
const Additem = () => {
  const [product, newProduct] = useState({
    ProductName: '',
    ProductCompany: '',
    ProductImage: '',
    ProductDetail: '',
    ProductDiscription: ''
  })
  useEffect(() => {
    fetch("/checkProduct",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(response => response.json()).then(data => {
        alert(data.message);
      }).catch(err => {
        alert('Product Sucessfully uploaded!!')
      });
  })

  const changehandler = (event) => {
    const { name, value } = event.target
    newProduct({
      ...product,
      [name]: value
    })
  }

  return (
    <>
      <div className='row lg-8 text-center'>
        <h1>Product Registration Form</h1>
        <div className="mb-3 row">
          <label for="ProductName" className="col-sm-2 col-form-label">Product Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control-plaintext" id="ProductName" value={product.ProductName} onChange={changehandler} />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="ProductCompany" className="col-sm-2 col-form-label">Product Company</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="ProductCompany" onChange={changehandler} />
          </div>
        </div>
      </div>
    </>
  )
}
