import { doc, setDoc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase";

export const setFirebaseApplicant = async (applicantId, data) => {
  const docRef = doc(firebaseDB, "applicants", applicantId);

  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      console.log("Document successfully updated!");
      return;
    }

    await setDoc(docRef, data, { merge: true });

    console.log("Document successfully updated!");
    return;
  } catch (e) {
    console.error("Error updating document: ", e);
    return "❌ Hubo un error al enviar la solicitud.";
  }
};
