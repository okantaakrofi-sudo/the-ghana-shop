import Stripe from "stripe";
import { buffer } from "micro";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: any) {
  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new Response("Webhook error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session: any = event.data.object;

    await addDoc(collection(db, "orders"), {
      sessionId: session.id,
      amount: session.amount_total,
      createdAt: new Date(),
    });
  }

  return new Response("Success", { status: 200 });
}
