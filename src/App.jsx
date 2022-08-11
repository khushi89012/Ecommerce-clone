import './App.css';
import { Routes, Route} from './routes/Router';


function App() {
    return (
        <div className='scroll'>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />



                

            </Routes>
                


            
        </div>
    );
}

export default App;
