import {collection, doc, orderBy, query, setDoc} from "firebase/firestore";
import {db} from "@/app/utils/firebase";

import {CustomMessage} from "@/app/utils/types";
import {getDocs} from "@firebase/firestore";


export const sendMessage = async (messageData: CustomMessage): Promise<void> => {
  // Create a reference to a new message document with an auto-generated ID
  const messageRef = doc(collection(db, "chats", messageData.chatroomID, "messages"));

  // Add timestamp if not included
  const finalMessage = {
    ...messageData,
    when: new Date(), // Use Firestore server timestamp
  };

  await setDoc(messageRef, finalMessage);
};

export async function fetchMessages(): Promise<CustomMessage[]> {
  const chatroomID = "someChatroomID"; // Replace with actual chatroom ID
  const messagesRef = collection(db, "chats", chatroomID, "messages");
  // Order messages by timestamp
  const messagesQuery = query(messagesRef, orderBy("when", "asc"));

  const snapshot = await getDocs(messagesQuery);
  return snapshot.docs.map(doc => doc.data() as CustomMessage);
}
