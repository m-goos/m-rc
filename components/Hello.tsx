import Image from 'next/image';

export default function Hello() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pt-10">
      <Image
        src={'/profilePic-640-q80-30kb.jpeg'}
        alt="Picture of the author"
        className="h-20 w-20 rounded-full"
        width={200}
        height={200}
        priority
      />
      <p className="text-md md:text-lg">
        Personal blog by <span className="font-semibold">Marc Goossens</span>
      </p>
    </div>
  );
}
