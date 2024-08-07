import React from 'react';
import { FaTools, FaHardHat, FaWrench } from 'react-icons/fa';
import styles from './UnderConstruction.module.css';

const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <FaTools className={styles.icon} />
        <h1 className={styles.title}>Sysbietec</h1>
        <FaHardHat className={styles.icon} />
        <h2 className={styles.subtitle}>Em Construção</h2>
        <FaWrench className={styles.icon} />
        <p className={styles.message}>Nosso site está em desenvolvimento. Em breve teremos novidades!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
