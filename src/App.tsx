import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Integral from './pages/Integral';
import MultiplyIntegral from './pages/MultiplyIntegral';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Integral />} />
        <Route path="/multiple" element={<MultiplyIntegral />} />
      </Routes>
    </Layout>
  );
}

export default App;
