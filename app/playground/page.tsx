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
    screenshot: '../',
    repository: null, // private
  },
  {
    title: 'Dashboard - graphs, tables',
    description:
      'Dashboard to visualize data, including chart.js and tables, fully responsive',
    link: 'https://d4risgryuo87c.cloudfront.net/',
    screenshot: '../',
    repository: null, // private
  },
];

export default function Page() {
  return (
    <section>
      <h1>Some deployed work</h1>
      <p>
        A brief overview of some simple things I built - a dated and incomplete
        view of what I can do, but it gives some idea 🍔. Most of this is
        written some years ago, before AI assisted coding..
      </p>

      {projects.map((p) => (
        <PlaygroundCard key={p.title} project={p} />
      ))}
    </section>
  );
}
