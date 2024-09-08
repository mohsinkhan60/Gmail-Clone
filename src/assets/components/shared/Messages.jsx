import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../../../Redux/appSlice";
import { db } from "../../../firebase";
import Message from "./Message";

export const Messages = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.appSlice.emails);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    // const q = query(collection(db, "emails"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        doc: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      {emails &&
        emails?.map((email, index) => <Message key={index} email={email} />)}
    </div>
  );
};
export default Messages;
