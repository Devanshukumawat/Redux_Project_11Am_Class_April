import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { AddToCart } from "../features/Cartslice";

function SingleProduct() {

  const dispatch = useDispatch()

  const productId = useParams()
  const {id} = productId

  const [singleData,setSingledata] = useState([])

  useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        return res.json()
      }).then((result)=>{
          console.log(result)
          setSingledata(result)
      })
    },[])

  return (
    <MDBContainer fluid className="my-3">
      <MDBRow className="justify-content-center">
        <MDBCol md="3">
          <MDBCard className="text-black">
            <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
            <MDBCardImage
              src={singleData.image}
              position="top"
              alt="Apple Computer"
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{singleData.title}</MDBCardTitle>
                <p className="text-muted mb-4">{singleData.category}</p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Price</span>
                  <span>${singleData.price}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Rating</span>
                  <span>{singleData.rating && singleData.rating.rate}/5</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Stock</span>
                  <span>{singleData.rating && singleData.rating.count}</span>
                </div>
              </div>
              <div className="d-flex  total font-weight-bold mt-4">
                <span>{singleData.description}</span>
              </div>

              <div className="d-flex justify-content-between mt-5">
                  <span><MDBBtn size="sm" color="dark" onClick={()=>{dispatch(AddToCart(singleData))}}>Add to cart</MDBBtn></span>
                  <span><Link to={"/"}><MDBBtn size="sm" color="danger">Cancel</MDBBtn></Link></span>
                </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SingleProduct;



