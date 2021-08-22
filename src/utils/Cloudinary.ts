import {v2 as cloudinary} from 'cloudinary';
import {cloudinaryConfig} from '../config/cloudinary/';

cloudinary.config(cloudinaryConfig);

export default cloudinary;