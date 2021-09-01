import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import CardRepository from './service/card_repository';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
//컴포넌트
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader}/>
);


ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cardRepository={cardRepository} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);