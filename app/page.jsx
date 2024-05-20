import CategoryBots from './components/CategoryBots/CategoryBots';
import Hero from './components/Hero/Hero';
import OpportunitiesMain from './components/OpportunitiesMain/OpportunitiesMain';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.blueLine}></div>
      <OpportunitiesMain />
      <div className={styles.blueLine}></div>
      <div className={styles.blackLine}></div>
      <CategoryBots />
    </main>
  );
}
