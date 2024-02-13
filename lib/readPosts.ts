import fs from 'fs';
import matter from 'gray-matter';

export type FrontMatter = {
  title: string;
  date: Date;
  description: string;
};

type Blog = {
  frontMatter: FrontMatter;
  slug: string;
};

const readPosts = () => {
  const blogDir = 'app/blog/(posts)';
  const folderNames = fs
    .readdirSync(blogDir)
    .filter((fileName) => fileName !== 'layout.tsx'); // remove 'layout.tsx in (posts) root

  // extract frontmatter
  const blogPreviews = folderNames.map((folderName) => {
    const file = fs.readFileSync(`${blogDir}/${folderName}/page.mdx`);
    const { data } = matter(file);

    return {
      frontMatter: data,
      slug: folderName, // slug is based on folder name for correct hrefs
    };
  }) as Blog[];

  // sort descending (recent date first)
  const sortedPreviews = blogPreviews.sort(
    (a, b) => b.frontMatter.date.getTime() - a.frontMatter.date.getTime()
  );

  return sortedPreviews;
};

export default readPosts;
