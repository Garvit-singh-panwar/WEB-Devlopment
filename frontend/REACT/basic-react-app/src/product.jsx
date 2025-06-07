// Make  a individual component 


//  in html to use css we use tags but in react we have to import css file
// in react there is something called webpack which makes import export functionality  possible in react
import "./product.css"

function Product(){
    return (
        // className is a keyword for attribute class  
        <div className="product">
        <h3>Product Title</h3>
        <p>Product description</p>
        </div>
    );
}

export default Product;