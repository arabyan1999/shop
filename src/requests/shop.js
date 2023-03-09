import { http } from '../services/RequestService'

const prefix = '/taroninak/e1f66913a6b280cf0a47534fdfcd9dda/raw/b173b772e994f556799cba9a11c96d8c1a452f10/mock-backend.json'

export const getDataApi = async () => {
    try {
        const res = await http.get(prefix);
        return res;
    } catch (e) {
        throw e;
    }
}
