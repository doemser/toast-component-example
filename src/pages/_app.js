import { useState } from "react";
import Toast from "@/components/Toast";

export default function App({ Component, pageProps }) {
  const [toast, setToast] = useState({
    isOpen: false,
    message: "",
  });

  function handleToast(message) {
    setToast({ isOpen: true, message });
  }

  function handleToastClose() {
    setToast({ isOpen: false, message: "" });
  }

  return (
    <>
      <Component {...pageProps} onToast={handleToast} />
      <Toast
        isOpen={toast.isOpen}
        message={toast.message}
        onToastClose={handleToastClose}
        duration={3000}
      />
    </>
  );
}
