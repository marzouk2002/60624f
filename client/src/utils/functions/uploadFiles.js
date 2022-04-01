import axios from "axios";

export function uploadFiles(files) {
    const url = `${process.env.REACT_APP_API_URL}/${REACT_APP_CLOUD_NAME}/image/upload`;
    const uploadPreset = REACT_APP_UPLOAD_PRESET;
    return Promise.all(
        files.map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", uploadPreset);
            const { data } = await axios.post(url, formData);
            return data.secure_url
        }
    ));
}