import logo from './logo.svg';
import './App.css';
import image from "./imageInSrc.jpg"
import "./styles.css"

function App() {
  return (
    <>
  <div className = "container">
   <h1 className = "title red"> Majdi Dabbousi</h1>
   <br />
   <img src = "/imageInPublic.jpg" ></img>
   <br />
   <img src = {image} ></img>
</div>
<video width="320" height="240" controls >
      <source src="./myVideo.mp4" type="video/mp4"/>
     </video>
</>

  );
}

export default App;
