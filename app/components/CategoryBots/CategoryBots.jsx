import styles from './styles.module.scss';

const CategoryBots = () => {
  return (
    <div className={styles.CategoryBots}>
      <h2 className={styles.title}>Категорії ботів</h2>
      <div className={styles.category + ' ' + styles.categoryright}>
        <div className={styles.imgWrapper}>
          <img src='/img/robot1.webp' alt='' />
        </div>
        <div className={styles.categoryBody}>
          <div className={styles.categoryHeader}>Заголовок</div>
          <div className={styles.categoryText}>
            Боти допомагають планомірно організувати найскладніші заходи,
            забезпечуючи необхідну кількість гостей з групи у месенджері.
            Надаючи однаково комфортний сервіс усім без виключення. Боти
            допомагають планомірно організувати найскладніші заходи,
            забезпечуючи необхідну кількість гостей з групи у месенджері.
            Надаючи однаково комфортний сервіс усім без виключення
          </div>
        </div>
      </div>
      <div className={styles.category + ' ' + styles.categoryReverse}>
        <div className={styles.imgWrapper}>
          <img src='/img/robot2.webp' alt='' />
        </div>
        <div className={styles.categoryBody}>
          <div className={styles.categoryHeader}>Заголовок</div>
          <div className={styles.categoryText}>
            Боти допомагають планомірно організувати найскладніші заходи,
            забезпечуючи необхідну кількість гостей з групи у месенджері.
            Надаючи однаково комфортний сервіс усім без виключення. Боти
            допомагають планомірно організувати найскладніші заходи,
            забезпечуючи необхідну кількість гостей з групи у месенджері.
            Надаючи однаково комфортний сервіс усім без виключення
          </div>
        </div>
      </div>
      <div className={styles.category + ' ' + styles.categoryright}>
        <div className={styles.imgWrapper}>
          <img src='/img/robot3.webp' alt='' />
        </div>
        <div className={styles.categoryBody}>
          <div className={styles.categoryHeader}>Заголовок</div>
          <div className={styles.categoryText}>
            Боти допомагають планомірно організувати найскладніші заходи,
            забезпечуючи необхідну кількість гостей з групи у месенджері.
            Надаючи однаково комфортний сервіс усім без виключення. Боти
            допомагають планомірно організувати найскладніші заходи,
            забезпечуючи необхідну кількість гостей з групи у месенджері.
            Надаючи однаково комфортний сервіс усім без виключення
          </div>
        </div>
      </div>
      <div className={styles.category + ' ' + styles.categoryReverse}>
        <div className={styles.imgWrapper}>
          <img src='/img/robot4.webp' alt='' />
        </div>
        <div className={styles.categoryBody}>
          <div className={styles.categoryHeader}>Заголовок</div>
          <div className={styles.categoryText}>
            Боти допомагають планомірно організувати найскладніші заходи,
            забезпечуючи необхідну кількість гостей з групи у месенджері.
            Надаючи однаково комфортний сервіс усім без виключення. Боти
            допомагають планомірно організувати найскладніші заходи,
            забезпечуючи необхідну кількість гостей з групи у месенджері.
            Надаючи однаково комфортний сервіс усім без виключення
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button>Замовити розробку</button>
        <button>Детальніше...</button>
      </div>
    </div>
  );
};

export default CategoryBots;
