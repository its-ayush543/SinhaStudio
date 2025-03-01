import React from 'react';
import { motion } from 'framer-motion';

interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          className="group relative overflow-hidden rounded-lg aspect-[4/5]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-white font-medium text-lg">{photo.title}</h3>
            <p className="text-neutral-200 text-sm">{photo.category}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGrid;