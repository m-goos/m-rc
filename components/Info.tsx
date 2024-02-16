type InfoProps = {
  /** Inform the user about what is going on: 'Currently working on a CSS bug related to flex alignment' */
  message: string;
  /** URL for the PR that shows the work-in-progress: 'https://github.com/m-goos/m-rc/pull/7'  */
  prLink?: string;
};

export default function Info({ message, prLink }: InfoProps) {
  return (
    <div className="flex flex-col rounded-md bg-blue-100 font-medium text-sm text-slate-600 p-3 my-2">
      <div className="flex">
        <span className="inline-flex justify-center items-center h-5 w-5 rounded-full bg-blue-500 text-blue-100 p-2 mr-3 text-center text-xs">
          i
        </span>
        <div className="flex flex-col space-x-1">
          {message}
          {prLink && (
            <span className="text-slate-400">
              Open PR:{' '}
              <a className="text-blue-500 hover:text-blue-800" href={prLink}>
                {prLink}
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
