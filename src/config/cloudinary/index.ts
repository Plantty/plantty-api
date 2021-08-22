type cloudinaryConfigType = {
  cloud_name: string;
  api_key: string;
  api_secret: string;
}

export const cloudinaryConfig: cloudinaryConfigType = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
};