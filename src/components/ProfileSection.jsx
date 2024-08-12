import React from 'react'

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-3xl font-bold p-heebo tracking-widest flex mb-6">PROFILE</h2>
      <div className='text-black/80'>
          <div className="flex flex-row gap-2">
            <p className="text-xl font-medium mb-2 tracking-wide">FULL NAME:</p>
            <p className="text-lg">Christopher Chen</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-xl font-medium mb-2 tracking-wide">BIRTH DATE:</p>
            <p className="text-lg">October 9, 2004</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-xl font-medium mb-2 tracking-wide">EMAIL:</p>
            <p className="text-lg">christopher.chen.1004@gmail.com <br></br>christopher_chen3@brown.edu</p>
          </div>
      </div>
    </div>
  );
}

export default ProfileSection