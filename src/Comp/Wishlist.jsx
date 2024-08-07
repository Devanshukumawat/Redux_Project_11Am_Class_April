
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../features/Cartslice";
import { Link } from "react-router-dom";
import { DeleteWishItem } from "../features/wishlistslice";


function Wishlist() {

    const WishlistData = useSelector((state)=>state.WishData.wishlist)
    const dispatch = useDispatch()
    console.log(WishlistData)

  return (
    <MDBContainer fluid>

    {
       WishlistData.length==0 ? <h1 style={{textAlign:"center"}}>No Wishlist Products</h1>  : WishlistData.map((value)=>(
            <>
            <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={value.image}
                      fluid
                      className="w-50"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>{value.title}</h5>
                  <div className="d-flex flex-row">
                    <span> Rating :-  {value.rating && value.rating.rate}</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>{value.category
                    }</span>
                  </div>
                  
                  <p className="text-truncate mb-4 mb-md-0">
                    {value.description}
                  </p>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">${value.price}</h4>
                    
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <Link to={`/singleproduct/${value.id}`}>
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    </Link>
                    <MDBBtn outline color="primary" size="sm" className="mt-2" onClick={()=>{dispatch(AddToCart(value))}}>
                      Add to Cart
                    </MDBBtn>
                    <MDBBtn className="mt-3" color="danger" onClick={()=>{dispatch(DeleteWishItem(value))}}>Delete</MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
            </>
        ))
    }

      
    </MDBContainer>
  );
}

export default Wishlist;