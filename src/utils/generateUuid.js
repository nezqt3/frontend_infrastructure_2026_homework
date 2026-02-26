import { v4 as uuidv4 } from 'uuid';

export const generateUuid = () => {
    const id = uuidv4();
    // id = '123'
    return id;
};
