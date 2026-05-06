import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  async uploadImage(file: Buffer, folder = 'combatclip/images'): Promise<{ url: string; publicId: string }> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder, resource_type: 'image' },
        (error, result) => {
          if (error) reject(error);
          else resolve({ url: result!.secure_url, publicId: result!.public_id });
        },
      );
      streamifier.createReadStream(file).pipe(uploadStream);
    });
  }

  async uploadVideo(file: Buffer, folder = 'combatclip/videos'): Promise<{ url: string; publicId: string }> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder, resource_type: 'video' },
        (error, result) => {
          if (error) reject(error);
          else resolve({ url: result!.secure_url, publicId: result!.public_id });
        },
      );
      streamifier.createReadStream(file).pipe(uploadStream);
    });
  }

  async uploadAudio(file: Buffer, folder = 'combatclip/audio'): Promise<{ url: string; publicId: string }> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder, resource_type: 'video' }, // audio as video for Cloudinary
        (error, result) => {
          if (error) reject(error);
          else resolve({ url: result!.secure_url, publicId: result!.public_id });
        },
      );
      streamifier.createReadStream(file).pipe(uploadStream);
    });
  }

  async destroy(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(publicId);
  }

  getUploadPreset(): string {
    return 'combatclip_unsigned';
  }
}
