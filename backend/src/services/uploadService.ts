import { v2 as cloudinary } from "cloudinary";
import { env } from "../config/env.js";
import { BadRequestError } from "../utils/errors.js";

if (env.CLOUDINARY_CLOUD_NAME && env.CLOUDINARY_API_KEY && env.CLOUDINARY_API_SECRET) {
  cloudinary.config({
    cloud_name: env.CLOUDINARY_CLOUD_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
  });
}

export async function uploadStream(
  buffer: Buffer,
  folder: string,
  publicId?: string
): Promise<{ url: string; publicId: string }> {
  if (!env.CLOUDINARY_CLOUD_NAME || !env.CLOUDINARY_API_KEY || !env.CLOUDINARY_API_SECRET) {
    throw new BadRequestError("Cloudinary is not configured");
  }

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `educational-platform/${folder}`,
        resource_type: "auto",
        ...(publicId && { public_id: publicId }),
      },
      (err, result) => {
        if (err) reject(err);
        else if (!result?.secure_url) reject(new Error("No URL returned"));
        else resolve({ url: result.secure_url, publicId: result.public_id });
      }
    );
    uploadStream.end(buffer);
  });
}

export function getSignedUploadParams(folder: string): {
  signature: string;
  timestamp: number;
  cloudName: string;
  apiKey: string;
  folder: string;
} {
  if (!env.CLOUDINARY_CLOUD_NAME || !env.CLOUDINARY_API_KEY || !env.CLOUDINARY_API_SECRET) {
    throw new BadRequestError("Cloudinary is not configured");
  }
  const timestamp = Math.round(new Date().getTime() / 1000);
  const folderPath = `educational-platform/${folder}`;
  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: folderPath },
    env.CLOUDINARY_API_SECRET
  );
  return {
    signature,
    timestamp,
    cloudName: env.CLOUDINARY_CLOUD_NAME,
    apiKey: env.CLOUDINARY_API_KEY,
    folder: folderPath,
  };
}
