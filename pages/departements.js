import axios from "axios";
import Head from "next/head";

const { Layout } = require("@/components/layout");

const Departements = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #000",
  };
  return (
    <>
      <Head>
        <title>Departement</title>
      </Head>
      <Layout>
        {data.map((departement) => (
          <div key={departement.code} style={styles}>
            <h1>{departement.nom}</h1>
            <p>code departement : {departement.code}</p>
            <p>code region : {departement.codeRegion}</p>
          </div>
        ))}
      </Layout>
    </>
  );
};
export const getStaticProps = async () => {
  const { data } = await axios.get(process.env.API_GOUV + "/departements");
  return {
    props: { data },
  };
};
export default Departements;
