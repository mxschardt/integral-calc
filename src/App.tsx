import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Differentials from './pages/Differentials';
import Elementary from './pages/Elementary';
import Integral from './pages/Integral';
import Main from './pages/Main';
import MultiplyIntegral from './pages/MultiplyIntegral';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/define-integral" element={<Integral />} />
        <Route path="/multiple-integral" element={<MultiplyIntegral />} />
        <Route path="/elementary-fn" element={<Elementary />} />
        <Route path="/diff" element={<Differentials />} />
      </Routes>
    </Layout>
  );
}

export default App;
