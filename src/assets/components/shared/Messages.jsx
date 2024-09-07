import { useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../../../Redux/appSlice";
import { db } from "../../../firebase";

export const Messages = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.appSlice.emails);
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        doc: doc.id,
      }));
      // console.log(allEmails)
      dispatch(setEmails(allEmails));
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      {emails &&
        emails?.map((email, index) => <Message key={index} email={email} />)}
      <Message />
    </div>
  );
};
export default Messages;
