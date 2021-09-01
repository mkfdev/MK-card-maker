import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFilechange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async event => {
    //event.target.files => FileList, get 1 : files[0]
    //upload실행 완료되면 uploaded에 할당
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);

    onFilechange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageUpload}>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          accept="image/*"
          name="file"
          onChange={onChange}
        />
        {!loading && 
          <button 
            className={`${styles.button} ${name ? styles.filled : styles.empty}`} 
            onClick={onButtonClick}>
              {name || 'No File'}
          </button>
        }
        {loading && <div className={styles.loading}></div>}
      </div>
    </div>
  );
}

export default ImageFileInput;