import Link from 'next/link';
import styles from './styles.module.scss';

const HeaderMenu = () => {
  return (
    <div className={styles.HeaderMenu}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.menu}>
        <li>
          <Link href='#'>Головна</Link>
        </li>
        <li>
          <Link href='#'>Про нас</Link>
        </li>
        <li>
          <Link href='#'>Можливості ботів</Link>
        </li>
        <li>
          <Link href='#'>Категорії ботів</Link>
        </li>
        <li>
          <Link href='#'>Контакти</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
