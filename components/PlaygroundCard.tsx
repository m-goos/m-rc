import Image from 'next/image';
import { Project } from 'app/playground/page';

export default function PlaygroundCard({ project }: { project: Project }) {
  return (
    // a grey shadow disappears against a dark page, so dark mode gets a black
    // one to keep the same sense of lift
    <article className="flex flex-col flex-1 min-w-[300px] bg-slate-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:bg-slate-800 dark:border-slate-700 dark:shadow-black/50 dark:hover:shadow-black/70">
      {/* `fill` pins the image to this box and object-cover crops the
          overflow. With width/height instead, the browser sized the image from
          its own 960x667 (1.44:1) ratio while the box is 16/10 (1.6:1), so it
          rendered ~11% taller than its container and spilled over the title. */}
      <div className="relative bg-gray-100 aspect-[16/10] dark:bg-slate-700">
        <Image
          src={project.screenshot}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 336px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col  flex-1 justify-between p-5">
        {/* description */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2 dark:text-slate-100">
            {project.title}
          </h2>
          <p className="text-sm text-gray-600 mb-4 dark:text-slate-400">
            {project.description}
          </p>
        </div>

        {/* links */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
          >
            Live Demo →
          </a>
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan-600 hover:text-cyan-900 transition-colors dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              Repository →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
