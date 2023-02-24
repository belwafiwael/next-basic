import { Layout } from "@/components/layout";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

const Blog = ({ posts }) => {
  const styles = {
    main: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid #ddd",
    },
    img: {
      width: 300,
      height: 200,
    },
  };
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        {posts.map((post) => {
          return (
            <div key={post._id} style={styles.main}>
              <h1>{post.title}</h1>
              <Link href="/blog/[id]" as={`/blog/${post._id}`}>
                <img
                  src={post.pictures[0]}
                  alt={post.title}
                  style={styles.img}
                />
              </Link>
              <div>{post.body}</div>
            </div>
          );
        })}
      </Layout>
    </>
  );
};
export const getStaticProps = async (context) => {
  const { data } = await axios.get(process.env.API_FLY + "/api/posts");
  const posts = data.data;
  return {
    props: { posts },
  };
};
export default Blog;
