import { Layout } from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
const Home = ({ data }) => {
  const styles = {
    margin: 10,
    padding: 10,
    borderBottom: "1px solid #000",
  };
  useEffect(() => {
    localStorage.setItem("jwt-token", "bfkejgfezjgfazeljfblzeakjfhalkze");
  }, []);
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Layout>
        <div className="container-fluid">
          <h1>Page Home</h1>
          {data.map((region) => (
            <div key={region.code} style={styles}>
              <Link href="/region/[code]" as={`/region/${region.code}`}>
                {region.nom}
              </Link>
              <p>{region.code}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};
export const getServerSideProps = async (context) => {
  const { data } = await axios.get(process.env.API_GOUV + "/regions");
  return {
    props: { data },
  };
};
export default Home;
