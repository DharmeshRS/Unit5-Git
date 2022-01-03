import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
            <div className='Div1'>
              <div>
                  <h1>Add recipe</h1>
              </div>
              <div>
                  <form>
                  <div>
                      <label>Title</label>
                      <input type="text" placeholder="Enter Title Of recipe" />
                  </div>
                  <div>
                      <label>Ingredients</label>
                      <input type="text" placeholder="Ingredients" />
                  </div>
                  <div>
                      <label>Time to cook</label>
                      <input type="text" placeholder="Time To cook" />
                  </div>
                  <div>
                  <label>Image</label>
                      <input type="file" />
                  </div>
                  
                      
                  </form>
              </div>
            </div>




            <div className='Div2'>
              <h1>Description</h1>
            </div>
            
    </div>
  );
}

export default App;
