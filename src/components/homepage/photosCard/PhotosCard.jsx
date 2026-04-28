import { Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDownload, FaRegHeart } from 'react-icons/fa';

const PhotosCard = ({ photos }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          src={photos.imageUrl}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          alt={photos.title || "AI Generated"}
        />
        {/* Model Badge */}
        <div className="absolute top-3 right-3">
          <Chip 
            variant="flat" 
            className="bg-black/40 backdrop-blur-md text-white border-none text-[10px] uppercase font-bold"
          >
            {photos.model}
          </Chip>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-gray-800 line-clamp-1 mb-3">
          {photos.title}
        </h4>
        
        {/* Stats Row */}
        <div className="flex items-center justify-between mb-5 text-gray-600">
          <div className="flex items-center gap-1.5 bg-pink-50 px-2 py-1 rounded-lg">
            <FaRegHeart className="text-pink-500 text-sm" />
            <span className="text-xs font-semibold text-pink-700">{photos.likes}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-blue-50 px-2 py-1 rounded-lg">
            <FaDownload className="text-blue-500 text-sm" />
            <span className="text-xs font-semibold text-blue-700">{photos.downloads}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link 
          href={`/allPhotos/${photos.id}`} 
          className="mt-auto w-full text-center py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-blue-600 transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PhotosCard;