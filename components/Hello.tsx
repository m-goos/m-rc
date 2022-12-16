import Image from 'next/image';
import profilePic from '../public/profilePic.jpeg';

export default function Hello() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Image
        src={profilePic}
        alt="Picture of the author"
        className="w-20 h-20 rounded-full"
      />
      <p className="text-md md:text-lg font-medium">Hello, welcome!</p>
    </div>
  );
}
