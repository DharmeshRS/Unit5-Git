// import logo from './logo.svg';
import './App.css';
const arr1=["Android","Blackberry","iPhone","window phone"]
function Mobileheading(){
  return <h1>Mobile Operating System</h1>
}

function Firstarray(){
  return (<ul>
        {arr1.map((e)=>(
          <li type="square">{e}</li>
        ))}
      </ul>)
}
function Secheading(){
  return <h1>Mobile Manufacturer</h1>
}

function Secarray(){
  return <ul>
        <li type="square">Samsung</li>
        <li type="square">HTC</li>
        <li>Micromax</li>
        <li type="circle">Apple</li>
      </ul>
}

function App() {
  return (
    <div className="App">
    <div>
      <Mobileheading />
      <Firstarray />
    </div>
    <div>
      <Secheading />
      <Secarray />
    </div>
    
    </div>
  );
}

export default App;
