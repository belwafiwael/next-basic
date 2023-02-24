import { Layout } from "@/components/layout";
import Head from "next/head";

const Items = () => {
  return (
    <>
      <Head>
        <title>Items</title>
      </Head>
      <Layout>
        <h1>Page Items</h1>
        <h2>List des catégories</h2>
        <ul>
          <li>Culture</li>
          <li>Géographie</li>
          <li>Social</li>
          <li>Economique</li>
        </ul>
      </Layout>
    </>
  );
};
export default Items;
