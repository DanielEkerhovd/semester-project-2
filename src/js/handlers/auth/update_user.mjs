import getProfile from "../../api/user/profile.mjs";

export default async function updateUser() {

    const user = localStorage.getItem('userName'); 

    const profile = await getProfile(user);

    // replace localStorage with new data

    localStorage.setItem('profile', JSON.stringify(profile.data));

};

