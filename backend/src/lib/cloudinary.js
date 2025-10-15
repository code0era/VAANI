import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();  // ✅ Proper dotenv initialization

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;


//  Everything just to see the images in the cloudinary bucket