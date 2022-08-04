import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Final from './pages/Final';

import Home from './pages/Home'
import Pergunta1 from './pages/Pergunta1';
import Pergunta2 from './pages/Pergunta2';
import Pergunta3 from './pages/Pergunta3';
import Pergunta4 from './pages/Pergunta4';

function RoustesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pergunta-1' element={<Pergunta1 />} />
                <Route path='/pergunta-2' element={<Pergunta2 />} />
                <Route path='/pergunta-3' element={<Pergunta3 />} />
                <Route path='/pergunta-4' element={<Pergunta4 />} />
                <Route path='/final' element={<Final />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoustesApp;