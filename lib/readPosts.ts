import fs from 'fs';
import matter from 'gray-matter';

const readPosts = () => {
  const blogDir = 'app/blog';
  const folderNames = fs
    .readdirSync(blogDir)
    .filter((fileName) => fileName !== 'page.tsx'); // remove 'page.tsx in root

  // extract frontmatter
  const blogs = folderNames.map((folderName) => {
    const file = fs.readFileSync(`${blogDir}/${folderName}/page.mdx`);
    const { data } = matter(file);
    return {
      frontMatter: data,
      slug: folderName,
    };
  });

  // TODO: sort by date
  return blogs;
};

export default readPosts;
