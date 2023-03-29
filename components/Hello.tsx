import Image from 'next/image';
import profilePic from '../public/profilePic.jpeg';

export default function Hello() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pt-10">
      <Image
        src={profilePic}
        alt="Picture of the author"
        className="h-20 w-20 rounded-full"
        width={200}
        height={200}
      />
      <p className="text-md md:text-lg">
        Personal blog by <span className="font-semibold">Marc Goossens</span>
      </p>
    </div>
  );
}
