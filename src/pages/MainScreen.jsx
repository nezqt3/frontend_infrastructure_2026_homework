import { generateUuid } from '../utils/generateUuid.js';

export default function MainScreen() {
    return (
        <div className="main-screen">
            <div className="main-screen__container">Ваш уникальный id: {generateUuid()}</div>
        </div>
    );
}
