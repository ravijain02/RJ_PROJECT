import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../src/components//Layout'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path ="/" element ={<Home/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
