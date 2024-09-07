import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../../Redux/appSlice";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../Firebase";

export const SendMail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const open = useSelector((state) => state.appSlice.open);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "emails"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      dispatch(setOpen(false));
      setFormData({
        to: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6FC] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 size={"15px"} />
        </div>
      </div>
      <form className="flex flex-col p-3 gap-2">
        <input
          onChange={changeHandler}
          value={formData.to}
          name="to"
          type="text"
          placeholder="to"
          className="outline-none py-1"
        />
        <input
          onChange={changeHandler}
          value={formData.subject}
          name="subject"
          type="text"
          placeholder="subject"
          className="outline-none py-1"
        />
        <textarea
          onChange={changeHandler}
          value={formData.message}
          name="message"
          cols={"30"}
          rows={"10"}
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          onClick={submitHandler}
          className="rounded-full w-fit px-4 text-white font-medium bg-[#8857D0] "
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default SendMail;
