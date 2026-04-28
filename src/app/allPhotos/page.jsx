import PhotosCard from '@/components/homepage/photosCard/PhotosCard';
import React from 'react';
const getAllPhotos = async()=>{
  const res= await fetch('https://pixgen-app.vercel.app/data.json')
  const data = res.json()
  return data
}
const AllPhotos = async() => {
  const allPhotos = await getAllPhotos()
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold mb-6">All Photos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          allPhotos.map((photos, index)=> 
          <PhotosCard 
          photos={photos} 
          key={index}>
          </PhotosCard>)
        }
      </div>
    </div>
  );
};

export default AllPhotos;