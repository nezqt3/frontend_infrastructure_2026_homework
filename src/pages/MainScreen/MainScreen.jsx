import styles from '@src/pages/MainScreen/MainScreen.module.css';
import { generateUuid } from '@src/utils/generateUuid.js';

export default function MainScreen() {
    return (
        <div className={styles.screen}>
            <div className={styles.container}>Ваш уникальный id: {generateUuid()}</div>
        </div>
    );
}
