import createKey from "../../api/user/api_key.mjs";

export default async function loginCheck() {
    
    let status = false;

    try {
        await createKey();;
        status = true;
    } catch (error) {
        console.error(error);
    }

    return status;
}