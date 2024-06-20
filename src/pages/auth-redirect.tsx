import Head from "next/head";
import React from "react";
import type { GetServerSidePropsContext } from "next";

type Props = {
  code: string;
};

export default function AuthRedirect(props: Props) {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">This your code? {props.code}</main>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const code = query.code;

  try {
    const response = await fetch("https://connect.stripe.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: "YOUR_CLIENT_ID",
        client_secret: "YOUR_CLIENT_SECRET",
        code: code as string,
        grant_type: "authorization_code",
      }).toString(),
    });

    const data = (await response.json()) as { access_token: string };
    const accessToken = data.access_token;
    return {
      props: {
        code: code ? code : "",
        status: code ? "success" : "error",
      },
    };
  } catch (error) {
    console.error(
      "Error exchanging authorization code for access token:",
      error,
    );
    return {
      props: {
        code: code ? code : "",
        status: "error",
      },
    };
  }

  return {
    props: {
      code: code ? code : "",
    },
  };
};