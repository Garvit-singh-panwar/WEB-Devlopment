
// using dynamic styling
function msgBox({name , textColor}){

    return(
        <div style={ {color: textColor}}>
            <h3>UserName: {name}</h3>
        </div>
    )

}

export default msgBox;