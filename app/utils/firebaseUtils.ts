import {collection, doc, orderBy, query, setDoc} from "firebase/firestore";
import {db} from "@/app/utils/firebase";

import {CustomMessage} from "@/app/utils/types";
import {getDocs} from "@firebase/firestore";


type sendMessageProps = {
  messageData: CustomMessage;
  chatroomID: string;
}
export const sendMessage = async ({messageData, chatroomID}: sendMessageProps): Promise<void> => {
  // Create a reference to a new message document with an auto-generated ID
  const messageRef = doc(collection(db, "chats", chatroomID, "messages"));

  // Add timestamp if not included
  const finalMessage = {
    ...messageData,
    when: new Date(), // Use Firestore server timestamp
  };

  await setDoc(messageRef, finalMessage);
};

type fetchMessagesProps = {
  chatroomID: string;
}

export async function fetchMessages({chatroomID}: fetchMessagesProps): Promise<CustomMessage[]> {

  const messagesRef = collection(db, "chats", chatroomID, "messages");
  // Order messages by timestamp
  const messagesQuery = query(messagesRef, orderBy("when", "asc"));

  const snapshot = await getDocs(messagesQuery);
  return snapshot.docs.map(doc => doc.data() as CustomMessage);
}

export async function createNewChatroom(): Promise<string> {
  const randomID = Math.random().toString(36).substring(2, 15);
  console.log(randomID)
  const chatroomRef = doc(collection(db, "chats"), randomID);
  await setDoc(chatroomRef, {});
  return randomID;
}

export async function retrieveChatroomIDs(): Promise<string[]> {
  const chatroomsRef = collection(db, "chats");
  const snapshot = await getDocs(chatroomsRef);
  return snapshot.docs.map(doc => doc.id);
}

