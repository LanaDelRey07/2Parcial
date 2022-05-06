import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="card">
        <div class="card_header red">
            <div class="tittle">
                <div class="circle">1</div>
                <p>Agenda/Topic</p>
            </div>
            <div class="id">
                <p>SAAS-000</p>
            </div>
        </div>
        <div class="card_section">
            <p>Descripcion de la card</p>
        </div>
        <div class="card_footer">
            <p>Mis Actualizaciones</p>
            <p>14/07/2021</p>
        </div>
    </div>
    </div>
  );
}

export default App;
