import { storage } from "@/db/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImageToStorage = async (file, folder='') => {

  try {    
    const storageRef = ref(storage, `${folder}/${file.name}`);
    const fileSnapshot = await uploadBytes(storageRef, file);
    const imgUrl = await getDownloadURL(fileSnapshot.ref);

    return {error:false, errorMsg: '', imgUrl};

  } catch (error) {
    return {error:true, errorMsg: error.message, imgUrl: ''}; 
  }

};


