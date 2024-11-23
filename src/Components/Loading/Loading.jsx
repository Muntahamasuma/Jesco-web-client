import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='min-h-screen min-w-screen flex justify-center items-center'>
       <ClipLoader
        color="#00000"
        loading={true}
        size={150}
      />
    </div>
  );
};

export default Loading;