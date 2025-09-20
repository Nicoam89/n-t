import React from 'react';
import widget from '../assets/images/Chart.png';
import styles from './CartWidget.module.css';

function ChartWidget() {
  return (
    <img src={widget} alt="Carrito" className={styles.icon} />
  );
}

export default ChartWidget