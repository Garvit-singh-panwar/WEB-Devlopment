// Make  a individual component 


//  in html to use css we use tags but in react we have to import css file
// in react there is something called webpack which makes import export functionality  possible in react
import "./product.css"
import Price from "./price";

// The Product component receives props from the parent (ProductTab).
// It uses props to display the title, description, and price of each product.
// same as function parameters
// function Product( {title, description , price , features , features2}){

    
//     return (
//         // className is a keyword for attribute class  
//         <div className="product">
//         <h3>{title}</h3>
//         <p>{ description}</p>
//         <p>price : {price}</p>
//         <p> { features.map((feature) => <li>{feature}</li>)} </p>
//         {/* add conditions ternary operator we can also use  if else */}
//         <p> Feature2: {features2?.a || "Not available"}</p>
//         </div>
//     );
// }


function Product({title , descriptions , price , discount}){

    return(
        <div className="product">
             <h3>{title}</h3>
             <ul>{ descriptions.map((description) => <li>{description}</li>)}</ul>
             <Price price = {price} discount ={discount}/>
        </div>
       
    );
}

export default Product;