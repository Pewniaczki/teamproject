import styles from './CurrentDetails.module.scss';

export const CurrentDetails: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <p className={styles.element_title}>Who will win</p>

        <div className={styles.element_container}>
          <div className={styles.element_block}>
            <p className={styles.element_block_paragraph}>1</p>
          </div>

          <div className={styles.element_block2}>
            <p className={styles.element_block2_paragraph}>2</p>
          </div>
        </div>

        <p className={styles.element_paragraph}>
          Your prediction, your game - vote!
        </p>
      </div>

      <div className={styles.element}>
        <p className={styles.element_title}>Will both teams score</p>

        <div className={styles.element_container}>
          <div className={styles.element_block}>
            <p className={styles.element_block_paragraph}>Yes</p>
          </div>

          <div className={styles.element_block2}>
            <p className={styles.element_block2_paragraph}>No</p>
          </div>
        </div>

        <p className={styles.element_paragraph}>
          Your prediction, your game - vote!
        </p>
      </div>

      <div className={styles.element}>
        <p className={styles.element_title}>Who will score first</p>

        <div className={styles.element_container}>
          <div className={styles.element_block}>
            <p className={styles.element_block_paragraph}>1</p>
          </div>

          <div className={styles.element_block3}>
            <p className={styles.element_block3_paragraph}>Withoutnheads</p>
          </div>

          <div className={styles.element_block2}>
            <p className={styles.element_block2_paragraph}>2</p>
          </div>
        </div>
        <p className={styles.element_paragraph}>
          Your prediction, your game - vote!
        </p>
      </div>

      <div className={styles.element}>
        <p className={styles.element_title}>Will there be a draw</p>

        <div className={styles.element_container}>
          <div className={styles.element_block}>
            <p className={styles.element_block_paragraph}>Yes</p>
          </div>

          <div className={styles.element_block2}>
            <p className={styles.element_block2_paragraph}>No</p>
          </div>
        </div>

        <p className={styles.element_paragraph}>
          Your prediction, your game - vote!
        </p>
      </div>
    </div>
  );
};
