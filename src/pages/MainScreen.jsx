import styles from '../styles/pages/main-screen.module.css';
import { generateUuid } from '../utils/generateUuid.js';

export default function MainScreen() {
    return (
        <div className={styles.screen}>
            <div className={styles.container}>Ваш уникальный id: {generateUuid()}</div>
        </div>
    );
}
