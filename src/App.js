import logo from './logo.svg';
import './App.css';
import images from './images/images.json'

function getMeta(url, callback) {
  const img = new Image();
  img.src = url;
  img.onload = function() { callback(this.width, this.height); }
}

function pageCounter(amount){

}


function App() {
  return (
    <div className="App">
      Testing Json Image Imports
      <br></br>
      {images &&
        images.map((image) => {
          console.log(image.id)
          getMeta(image.content, (width, height) => {console.log(width,height) });
          return (
            <div className="box" key={image.id}>
              <div> {image.title} </div>

              <img
                id={image.id}
                style={{ width: "900px", height: "100%" }}
                src={image.content}
              />
            </div>
          );
        })}
    </div>
  );
}

export default App;
