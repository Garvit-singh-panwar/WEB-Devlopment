
// Combine individual component into a new component 

import Product from "./product";




function ProductTab(){
     // Props in React are used to pass data from parent to child components.
    // Here, we are passing props like title, description, and price to the Product component.  

    // passing array or object
    let options = ["hi-tech" , "durable" , "fast"];
    let options2 = {a: "hi-tech" , b: "durable" , c:"fast"};
    
    return(
    <>
      <Product title="phone" description="phone description" price={30000} features={options} features2={options2} />

      {/* we can also pass array and object directly like this  */}
      <Product title = "laptop" description="laptop description" price={40000} features={["hi-tech" , "durable"] } features2={{a:"hi-tech" , b:"durable"}} />
      <Product title = "pen" description="pen description" price={5} features={["fast" , "durable"]} />

    </>
    );

}
 

export default ProductTab;