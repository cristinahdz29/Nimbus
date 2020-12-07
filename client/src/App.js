import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //define function to get current location on load
    function getLocation() {
     // if statement for when page loads, if user's device supports geolocation, 
     // we will get their coordinates on load
     console.log(navigator)
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition( function (position) {
         console.log(position)
       })
     }
   }
   getLocation()

  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}

export default App;
