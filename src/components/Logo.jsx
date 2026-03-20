import React, { useState } from 'react';
import '../styles/Logo.css';

const Logo = () => {
  const [imgError, setImgError] = useState(false);
  const logoUrl = "https://instagram.ftuc1-2.fna.fbcdn.net/v/t51.2885-19/329666907_1076999333691929_131884930659851365_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43NDQuYzIifQ&_nc_ht=instagram.ftuc1-2.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QEO1VV3XftbyfIjux6oylxdpR_04M4cE8ZeI3_KZgXXfwtEmuFXxZ7Pz4QXvMbBJNc&_nc_ohc=uXs6i10vLdsQ7kNvwGg-AfX&_nc_gid=FGh27FeJAhVUhWFwsUB-yA&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfzerD8btddqn9JFow-O5KAUzStufdzRaOzQV1YlfrnKXg&oe=69BF81FE&_nc_sid=22de04";

  if (imgError) return (
    <div className="logo-fallback">M</div>
  );

  return (
    <img 
      src={logoUrl} alt="MyM Logo" 
      className="logo-img"
      onError={() => setImgError(true)}
    />
  );
};

export default Logo;
