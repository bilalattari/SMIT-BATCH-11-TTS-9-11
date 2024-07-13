import {
  addDoc,
  collection,
  db,
  ref,
  uploadBytes,
  getDownloadURL,
  storage,
  auth,
} from "../utils/utils.js";

const submit_food_form = document.getElementById("submit_food_form");

submit_food_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    image: e.target[0].files[0],
    foodName: e.target[1].value,
    foodLocation: e.target[2].value,
    foodPrice: e.target[3].value,
    addByUid: auth.currentUser.uid,
    addByEmail: auth.currentUser.email,
  };

  const imageRef = ref(storage, `${new Date().getTime().toString()}/jpeg`);
  uploadBytes(imageRef, obj.image).then(() => {
    console.log("Image upload hogye");

    getDownloadURL(imageRef).then((url) => {
      console.log("url agye=>", url);
      obj.image = url;
      const foodCollection = collection(db, "foods");
      addDoc(foodCollection, obj).then(() => {
        console.log("Doc upload hogya");
        window.location.href = "/";
      });
    });
  });
});
