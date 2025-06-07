import "./App.css"
import Title from "./Title.jsx"
import ProductTab from "./productTab.jsx";
import MsgBox from "./MsgBox.jsx";

function Description()
{
  return <h3>I am a description</h3>
}

// using new component into app 
// built hriearchy 
// product component --> productTab Component --> App component
function App() {
  
return (
  <>
  {/* we are using dynamic styling using this we print name with the text color we want */}
  <MsgBox name="Garvit" textColor="green"/>
  <ProductTab/>
  </>
)
  
}

export default App
