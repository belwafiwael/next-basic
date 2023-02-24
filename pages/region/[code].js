import { Layout } from "@/components/layout";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

const CodeRegion = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Head>
            <title>{data.nom}</title>
          </Head>
          <Layout>
            <h1>{data.nom}</h1>
            <p>{data.code}</p>
          </Layout>
        </>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const code = context.params.code;
  const { data } = await axios.get(process.env.API_GOUV + "/regions/" + code);
  return {
    props: { data },
  };
};
export default CodeRegion;
