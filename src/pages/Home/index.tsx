import './styles.css';
import CarImageHome from '../../assets/images/car-header 1.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>

        <div className="home-image-container">
          <img src={CarImageHome} alt="Imagem carro" />
        </div>
      </div>
      <div>
        {<Link to="/products">
          <Button />
        </Link>}
      </div>
    </div>
  );
}

export default Home;