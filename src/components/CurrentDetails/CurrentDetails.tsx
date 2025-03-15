import styles from './CurrentDetails.module.scss';

export const CurrentDetails: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <p className={styles.element_title}>Who will win</p>

        <div className={styles.element_container}>
          <div className={styles.element_block}></div>

          <div className={styles.element_block2}></div>
        </div>

        <p className={styles.element_paragraph}>
          Your prediction, your game - vote!
        </p>
      </div>

      <div className={styles.element}>
        <p className={styles.element_title}>Who will win</p>

        <div className={styles.element_container}>
          <div className={styles.element_block}></div>

          <div className={styles.element_block2}></div>
        </div>

        <p className={styles.element_paragraph}>
          Your prediction, your game - vote!
        </p>
      </div>

      <div className={styles.element}>
        <p className={styles.element_title}>Who will win</p>

        <div className={styles.element_container}>
          <div className={styles.element_block}></div>

          <div className={styles.element_block2}></div>
        </div>
        <p className={styles.element_paragraph}>
          Your prediction, your game - vote!
        </p>
      </div>

      <div className={styles.element}>
        <p className={styles.element_title}>Who will win</p>

        <div className={styles.element_container}>
          <div className={styles.element_block}></div>

          <div className={styles.element_block3}></div>
          
          <div className={styles.element_block2}></div>
        </div>

        <p className={styles.element_paragraph}>
          Your prediction, your game - vote!
        </p>
      </div>
    </div>
  );
};
