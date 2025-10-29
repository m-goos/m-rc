import PlaygroundCard from '@/components/PlaygroundCard';

export type Project = {
  title: string;
  description: string;
  link: string;
  screenshot: string;
  repository: string | null;
};

const projects: Project[] = [
  {
    title: 'Dashboard - graphs, tables',
    description:
      'Dashboard to visualize data, including chart.js and tables, fully responsive',
    link: 'https://d4risgryuo87c.cloudfront.net/',
    screenshot: '/playground/dashboard-optimized.jpg',
    repository: null, // private
  },
  {
    title: 'Angular blog',
    description:
      'Markdown blog built in Angular. First thing I ever built in Angular to get hang of it.',
    link: 'https://d1c4tebsr2ti4f.cloudfront.net/blog',
    screenshot: '/playground/angular-blog-optimized.jpg',
    repository: 'https://github.com/m-goos/angular-blog',
  },
  {
    title: 'SWAPI - Star Wars dev API search page',
    description: 'Project built around SWAPI, the Star Wars API (MUI, React).',
    link: 'https://dc96s2y1hkfuo.cloudfront.net/',
    screenshot: '/playground/star-wars-optimized.jpg',
    repository: 'https://github.com/m-goos/swapi-playground',
  },
];

/**
 * Capturing screenshots:
 * - open the page in any chromium browser
 * - use "devices", choose "iPad Air" in horizontal mode
 * - open the command palette in DevTools: `cmd + shift + P`
 * - type "Capture screenshot"
 */

export default function Page() {
  return (
    <section>
      <h1>Some deployed work</h1>
      <p>
        An overview of some tiny, simple things I built - a dated and incomplete
        view of what I can do, just putting it out there 🍔. All of this is
        written some years ago (2020~2022), before AI assisted coding..
      </p>

      <p>
        All of these are static builds, uploaded in an S3 bucket with Cloudfront
        as a CDN. A very simple <em>stack</em>.
      </p>

      {projects.map((p) => (
        <PlaygroundCard key={p.title} project={p} />
      ))}
    </section>
  );
}
