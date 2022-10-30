import './styles/layout.css';

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <section className="layout">
      <h1>Калькулятор Определенных Интегралов</h1>

      {children}

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
