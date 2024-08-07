import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import { cartTotal, decreaseItemQuantity, DeleteCartItem, increaseItemQuantity, RemoveAllProduct } from "../features/Cartslice";
import { Link } from "react-router-dom";


export default function ReviewPage() {
  const cartData = useSelector((state) => state.CartData.cart);
  const cartPrice = useSelector((state) => state.CartData);
  
  console.log(cartPrice);
  const dispatch = useDispatch();

  dispatch(cartTotal())

  

  return (
    <section className="py-5" style={{ backgroundColor: "#dcdcdc" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">
                Shopping Cart {cartData.length} item
                {cartData.length > 1 ? "s" : ""}{" "}
              </span>
            </p>

            {cartData.length === 0 ? (
              <h2 style={{ color: "red" }}>Your shopping cart is empty...</h2>
            ) : (
              cartData.map((value) => (
                <MDBCard key={value.id} className="mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="align-items-center">
                      <MDBCol md="2">
                        <MDBCardImage
                          fluid
                          src={value.image}
                          alt="Product image"
                        />
                      </MDBCol>
                      <MDBCol md="2" className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">
                            Product Name
                          </p>
                          <p className="lead fw-normal mb-0">{value.title}</p>
                        </div>
                      </MDBCol>
                      <MDBCol md="2" className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Rating</p>
                          <p className="lead fw-normal mb-0">
                            <Stack spacing={1}>
                              <Rating
                                name="half-rating-read"
                                value={value.rating && value.rating.rate}
                                precision={0.5}
                                readOnly
                              />
                            </Stack>
                          </p>
                        </div>
                      </MDBCol>
                      <MDBCol md="2" className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Quantity</p>
                          <div className="d-flex align-items-center">
                            <MDBBtn color="light" size="sm">
                              <FaMinus onClick={()=>{dispatch(decreaseItemQuantity(value))}} />
                            </MDBBtn>
                            <p className="lead fw-normal mb-0 mx-2">
                              {value.qunatity}
                            </p>
                            <MDBBtn color="light" size="sm">
                              <FaPlus onClick={()=>{dispatch(increaseItemQuantity(value))}} />
                            </MDBBtn>
                          </div>
                        </div>
                      </MDBCol>
                      <MDBCol md="2" className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Price</p>
                          <p className="lead fw-normal mb-0">
                            ${value.price}
                          </p>
                        </div>
                      </MDBCol>
                      <MDBCol md="2" className="d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Total</p>
                          <p className="lead fw-normal mb-0">$ {value.qunatity*value.price}</p>
                        </div>
                      </MDBCol>
                      <MDBCol md="2" className="d-flex justify-content-center">
                        <div className="mt-2">
                          <MDBBtn color="danger" size="sm" onClick={()=>{dispatch(DeleteCartItem(value))}}>
                            <FaTrashAlt />
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              ))
            )}

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">${cartPrice.totalPrice}</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end">
              <Link to={"/"}>
              <MDBBtn color="light" size="lg" className="me-2">
                Continue shopping
              </MDBBtn>
              </Link>
              <MDBBtn size="lg" onClick={()=>{dispatch(RemoveAllProduct())}}>Remove All Products</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
