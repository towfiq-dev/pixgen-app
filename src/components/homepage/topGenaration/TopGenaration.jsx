// import React from 'react';
// import PhotosCard from '../photosCard/PhotosCard';

// const getAllPhotos = async()=>{
//   const res = await fetch('')
//   const data = await res.json()
//   return data
// }
// const TopGenaration = async() => {
//   const allPhotos = await getAllPhotos()

//   return (
//     <div>
//       <h3 className= 'text-[20px] font-bold'>Top Generations</h3>
//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//         {
//           allPhotos.map((photos, index)=> 
//           <PhotosCard 
//           photos={photos} 
//           key={index}>
          
//           </PhotosCard>)
//         }
//       </div>
//     </div>
//   );
// };

// export default TopGenaration;