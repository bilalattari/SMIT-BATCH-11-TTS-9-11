import { useContext, useState } from "react";
import Button from "../components/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../utils/firebase";
import { useNavigate } from "react-router";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { UserContext } from "../context/UserContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function Profile() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  console.log("user in profile=>", user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [desc, setDec] = useState(user?.desc);
  const [avatar, setAvatar] = useState(user?.avatar);
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      const obj = {
        username,
        email,
        phoneNumber,
        desc,
      };
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, obj);
      setUser({ ...user, ...obj });
      setLoading(false);

      console.log("Document Updated");
    } catch (err) {
      setLoading(false);
    }
  };

  const handeUpdateUserImage = async (e) => {
    console.log("e=>", e.target.files[0]);
    try {
      setLoading(true);
      const storageRef = ref(storage, `users/${user.uid}`);
      // image upload krne ke lye
      const uploadImg = await uploadBytes(storageRef, e.target.files[0]);
      // image lena parhta he url
      const url = await getDownloadURL(storageRef);
      setAvatar(url)
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, { avatar: url });
      setUser({ ...user, avatar: url });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto justify-center items-center">
      <div className="flex flex-col mt-10 items-center">
        <label className="cursor-pointer h-32 w-32 bg-blue-200 rounded-full border">
          {avatar ? (
            <img
              src={avatar}
              className="cursor-pointer h-32 w-h-32 bg-blue-200 rounded-full border"
            />
          ) : null}
          <input
            onChange={handeUpdateUserImage}
            className="hidden"
            type="file"
          />
        </label>

        <input
          className="w-full lg:w-1/2 border p-2 my-2 rounded-md"
          placeholder="Username"
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="w-full lg:w-1/2 border p-2 my-2 rounded-md"
          placeholder="Email"
          disabled
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full lg:w-1/2 border p-2 my-2 rounded-md"
          placeholder="Phone Number"
          value={phoneNumber}
          type="number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <textarea
          value={desc}
          onChange={(e) => setDec(e.target.value)}
          className="w-full lg:w-1/2 border p-2 my-2 rounded-md"
          placeholder="About me"
        ></textarea>

        <Button
          onClick={handleUpdateProfile}
          isLoading={loading}
          text={"Update Profile"}
        />
      </div>
    </div>
  );
}
export default Profile;
