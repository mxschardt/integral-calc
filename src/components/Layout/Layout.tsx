import { Link } from 'react-router-dom';
import './styles/layout.css';

function Layout({ children }: { children?: React.ReactNode }) {
  const pages = [
    ['Главная', '/'],
    ['Определенный интеграл', '/define-integral'],
    ['Кратный интеграл', '/multiple-integral'],
    ['Вычисление Элементарных Функций', '/elementary-fn']
  ];

  return (
    <section className="layout">
      <h1>Калькулятор Определенных Интегралов</h1>
      <nav className="navbar">
        <ul>
          {pages.map((e) => (
            <li key={e[1]}>
              <Link to={e[1]} className="nav-item">
                {e[0]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

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
