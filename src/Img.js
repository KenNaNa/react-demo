import React from 'react';

const user = {
  src: 'https://yt3.ggpht.com/ZxofcitGxrpJUb8JRH6_zMUhI-pjvzPz7lxHDUvB8ufiLPbvT7X-ZO8y8jymMBkDCmiT2YI6=s88-c-k-c0x00ffffff-no-rj',
  name: 'kennana',
  width: '100px',
  height: '100px',
};

export default function Img() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.src}
        alt={'Photo of ' + user.name}
        style={{
          width: user.width,
          height: user.height,
        }}
      />
    </>
  );
}
