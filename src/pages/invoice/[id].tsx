import Head from "next/head";
import React from "react";
import { getApiUrl } from "../../utils/apiUrl";
import { GetServerSidePropsContext } from "next";

type Props = {
  data: {
    invoice: {
      amount_paid: number;
    };
  };
};

export default function Home(props: Props) {
  // useEffect(() => {
  //   const invoices = listInvoices();
  // }, []);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        {props.data.invoice.amount_paid > 0 ? (
          <span className="rounded-full border-2 border-green-700 bg-green-400 p-4 font-bold text-white">
            Invoice paid ✅
          </span>
        ) : (
          <span className="rounded-full border-2 border-red-700 bg-red-400 p-4 font-bold text-white">
            Invoice unpaid ❌
          </span>
        )}
      </main>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const { id } = query;

  const invoice = await fetch(`http://localhost:3000/api/invoice/${id}`);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const json = await invoice.json();

  const data = {
    invoice: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      amount_paid: json?.invoice?.amount_paid as number,
    },
  };

  console.log(data);
  return {
    props: {
      data,
    },
  };
};
