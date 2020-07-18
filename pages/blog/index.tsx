import React from "react";

type Props = {
  posts: Array<{
    href: string;
    title: string;
  }>;
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const fs = require('fs');
  const path = require('path');

  const posts = fs.readdirSync(path.join(process.cwd(), 'pages', 'blog'))
    .filter((el: string) => /^\d+-\d+-\d+/.test(el))
    .map((el: string) => `/blog/${el}`)
    .map((href: string) => {
      const title = (/\d+-\d+-\d+-(\S+)\.mdx/gm.exec(href) || ['']).pop() || '';

      return {
        href,
        title: title.replace(/[-]/g, ' '),
      };
    })
  ;

  return {
    props: {
      posts
    },
  };
}

const BlogIndex: React.FC<Props> = ({
  posts = []
}) => (
  <>
    <h1>blog index</h1>

    <ul>
      {posts.map((el, index) => {
        return (
          <li key={index}>
            <a href={el.href}>{el.title}</a>
          </li>
        )
      })}
    </ul>
  </>
);

export default BlogIndex;