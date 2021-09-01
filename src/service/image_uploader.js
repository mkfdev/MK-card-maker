class ImageUploader {
  async upload(file){
    const url = "https://api.cloudinary.com/v1_1/dk1ydorxv/image/upload";
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", 'mzg0qmi0');

    const result = await fetch(url, {
        method: "POST",
        body: data
      }
    );

    return await result.json();
  }
}

export default ImageUploader;

//rest api
//get post put delete