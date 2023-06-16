import { Article } from "@/app/_components/article/Article";

const BUTTERCMS_TOKEN = process.env.NEXT_PUBLIC_BUTTERCMS_TOKEN || '';

async function getBlogPosts() {
  const res = await fetch(`https://api.buttercms.com/v2/posts/?auth_token=${BUTTERCMS_TOKEN}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <>
    {blogPosts.data.map((blogPost: any, i: number) => {
      const { title } = blogPost;
      return <p key={`${title}-${i}`}>{title}</p>
    })}
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </>
  );
}
