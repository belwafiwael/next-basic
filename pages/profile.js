import { Layout } from "@/components/layout";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Profile = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #000",
  };

  if (!data) return <h1>Loading...</h1>;
  if (error) return <h1>Une erreur c&apos;est produit</h1>;

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout>
        {data &&
          data.map((user) => (
            <div key={user.id} style={styles}>
              <h1>{user.name}</h1>
              <p>Email: {user.email}</p>
              <p>Téléphone: {user.phone}</p>
            </div>
          ))}
      </Layout>
    </>
  );
};
export default Profile;
