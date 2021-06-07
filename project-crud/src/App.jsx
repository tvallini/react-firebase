import './App.css';
import Names from './components/Names';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Names />
      
      <div className="row">
        <div className="col">
          <Card 
            img="https://res.cloudinary.com/tomivallini/image/upload/v1619037161/mundo-tila/set-conjunto.jpg" 
            title="Card 1"
            description="This is a description."
          />
        </div>     
        <div className="col">
          <Card 
            img="https://res.cloudinary.com/tomivallini/image/upload/v1619037161/mundo-tila/set-conjunto.jpg" 
            title="Card 2"
            description="This is a description."
          />
        </div>
        <div className="col">
          <Card 
            img="https://res.cloudinary.com/tomivallini/image/upload/v1619037161/mundo-tila/set-conjunto.jpg" 
            title="Card 3"
            description="This is a description."
          />
        </div>

      </div>
    </div>
  );
}

export default App;