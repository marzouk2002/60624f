import axios from "axios";

export function uploadFiles(files) {
    const url = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
    const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;
    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
    const instance = axios.create();
   
    return Promise.all(
        files.map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", uploadPreset);
            const { data } = await instance.post(url, formData, config, config);
            return data.secure_url
        }
    ));
}