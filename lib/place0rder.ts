import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const placeOrder = async (order: any) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...order,
      createdAt: serverTimestamp(),
    });

    console.log("Order saved:", docRef.id);
  } catch (error) {
    console.error("Error saving order:", error);
  }
};
