
// Combine individual component into a new component 

import Product from "./product";




function ProductTab(){
     // Props in React are used to pass data from parent to child components.
    // Here, we are passing props like title, description, and price to the Product component.  
    return(
    <>
      <Product title="phone" description="phone description" price={30000} />
      <Product title = "laptop" description="laptop description" price={40000} />
      <Product title = "pen" description="pen description" price={5} />

    </>
    );

}
 

export default ProductTab;