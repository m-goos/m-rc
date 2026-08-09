import Image from 'next/image';

export default function Hello() {
  return (
    <div className="flex flex-col grow items-center justify-center space-y-4 pt-10">
      <p className="text-md md:text-lg">
        Hi, I&apos;m <span className="font-semibold">Marc Goossens</span>
      </p>
      <Image
        src={'/profilePic-640-q80-30kb.jpeg'}
        alt="Picture of the author"
        className="rounded-full"
        width={80}
        height={82.4}
        priority
      />
    </div>
  );
}
