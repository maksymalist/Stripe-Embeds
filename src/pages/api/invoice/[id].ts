import { getStripe } from "../../../utils/stripe";
import type { NextApiRequest, NextApiResponse } from "next";

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const stripe = getStripe();

  // Retrieve the invoice

  const invoice = await stripe.invoices.retrieve(id as string);

  return res.status(200).json({ invoice });
};

export default GET;
