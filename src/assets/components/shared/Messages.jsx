import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../../../Redux/appSlice";
import { db } from "../../../firebase";
import Message from "./Message";

export const Messages = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.appSlice.emails);
  const searchText = useSelector((state) => state.appSlice.searchText);
  const [tempEmails, setTempEmails] = useState(emails);

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

  useEffect(() => {
    const filteredEmails = emails?.filter((email) =>
      email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
    );
    setTempEmails(filteredEmails);
  },[searchText, emails])


  return (
    <div>
      {tempEmails &&
        tempEmails?.map((email, index) => <Message key={index} email={email} />)}
    </div>
  );
};
export default Messages;
