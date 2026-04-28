import React from 'react';

const DetailsPage = async ({ params }) => {
  // Params theke ID nilam
  const { id } = await params;

  // 1. Shob data fetch korlam
  const res = await fetch('https://pixgen-app.vercel.app/data.json');
  const allPhotos = await res.json();

  // 2. find() bebohar kore specific photo-ti khuje ber korlam
  const data = allPhotos.find((photo) => photo.id == id);

  // 3. Jodi data na pauya jay (Safety Check)
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-bold text-red-500">Photo not found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10">
       {/* Ekhon data.title kaj korbe */}
      <h1 className="text-3xl font-bold mb-5">{data.title}</h1>
      {/* <div className="rounded-2xl overflow-hidden shadow-lg border">
        <img 
          src={data.imageUrl} 
          alt={data.title} 
          className="w-full h-auto object-cover" 
        />
      </div> */}
      <div className="mt-5 flex gap-4 text-gray-600">
        <p>Model: <strong>{data.model}</strong></p>
        <p>Likes: <strong>{data.likes}</strong></p>
      </div>
    </div>
  );
};

export default DetailsPage;