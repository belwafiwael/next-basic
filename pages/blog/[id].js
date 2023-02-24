import { Layout } from "@/components/layout";
import axios from "axios";
import Head from "next/head";

const Title = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Head>
            <title>{data.title}</title>
          </Head>
          <Layout>
            <h1>{data.title}</h1>
            <div>
              <img src={data.pictures[0]} alt={data.title} />
            </div>
            <p>{data.description}</p>
          </Layout>
        </>
      )}
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const { data } = await axios.get(process.env.API_FLY + "/api/post/" + id);
  return {
    props: { data },
  };
};
export const getStaticPaths = async ({ params }) => {
  const { data } = await axios.get(process.env.API_FLY + "/api/posts");
  const posts = data.data;
  const paths = posts.map((post) => ({
    params: { id: post._id },
  }));
  return { paths, fallback: true };
};
export default Title;
