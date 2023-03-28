import Image from 'next/image';
import profilePic from '../public/profilePic.jpeg';

export default function Hello() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Image
        src={profilePic}
        alt="Picture of the author"
        className="h-20 w-20 rounded-full"
      />
      <p className="text-md font-medium md:text-lg">Hello, welcome!</p>
    </div>
  );
}
