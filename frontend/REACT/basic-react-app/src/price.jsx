function Price({price , discount}){
    
    return(
      
        <div style={{ backgroundColor: "#e0c367" , height: "30px", width: "100%" ,
            borderBottomLeftRadius: "10px" , borderBottomRightRadius: "10px"
        }} >
          <span style={{textDecoration: "line-through"}}>{price}</span>
          &nbsp; &nbsp;&nbsp;
          <span style={{fontWeight: "800"}}>{price - price/100*discount}</span>
        </div>
        
    );

}

export default Price;