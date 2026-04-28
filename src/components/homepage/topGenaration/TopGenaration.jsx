import React from 'react';
import PhotosCard from '../photosCard/PhotosCard';
import Link from 'next/link';
import { Button } from '@heroui/react';

const getAllPhotos = async()=>{
  const res = await fetch('https://pixgen-app.vercel.app/data.json')
  const data = await res.json()
  return data
}
const TopGenaration = async() => {
  const allPhotos = await getAllPhotos()

  return (
    <section className="container mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold mb-6">Top Generations</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allPhotos.slice(0,8).map((photos) => (
          <PhotosCard key={photos.id} photos={photos} />
        ))}
      </div>
      <Link href={'/allPhotos'} className='flex justify-center mt-5'>
      <Button>Show All</Button>
      </Link>
    </section>
  );
};

export default TopGenaration;