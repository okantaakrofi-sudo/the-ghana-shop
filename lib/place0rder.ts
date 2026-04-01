import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export async function placeOrder(order: any) {
  try {
    await addDoc(collection(db, "orders"), order);
  } catch (error) {
    console.error("Error saving order:", error);
  }
}
