import { Link } from 'react-router-dom';
import './styles/layout.css';

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <section className="layout">
      <h1>Калькулятор Определенных Интегралов</h1>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/' className='nav-item'>Определенный Интеграл</Link>
          </li>
          <li>
            <Link to='/multiple' className='nav-item'>Кратный Интеграл</Link>
          </li>
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
