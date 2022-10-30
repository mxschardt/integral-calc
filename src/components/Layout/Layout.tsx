import './styles/layout.css'
import Integral from '../../pages/Integral';
import MultiplyIntegral from '../../pages/MultiplyIntegral';

function Layout() {
  return (
    <section className="layout">
      <h1>Калькулятор Определенных Интегралов</h1>

      <Integral />
      <MultiplyIntegral />

      <footer>
        <h3>
          Васильева Марина × Балаев Жамал × Иванов Никита × Рожков Максим ×
          Шардт Максим
        </h3>
      </footer>
    </section>
  );
}

export default Layout;
