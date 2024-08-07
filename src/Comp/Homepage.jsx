import { Box } from "@mui/material";
import Product from "./Product";

function HomePage(props) {
    const {productData} = props
    return ( 
        <>
           <Box sx={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"15px",
            marginTop:"13px"
           }}>
           {
                productData.map((value)=>(
                    <>
                    <Product data={value}/>
                    </>
                    
                ))
            }
           </Box>
            
        </>
     );
}

export default HomePage;