import Image from "next/image";

const Logo = () => 
<Image src="/logo.png" 
alt="Logo" width={140} height={100}
/>;

export const Icons = {
    logo: Logo,
};