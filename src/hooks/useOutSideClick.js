import { createRef, useEffect } from "react";

function useOutSideClick({ close}) {
  const ref = createRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }
      // we set useCapture to true because we want to disable bubbling phase when click on add New cabin button
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [close]
  );
  return ref;
}

export default useOutSideClick;
