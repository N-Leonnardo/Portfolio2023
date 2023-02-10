import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Alert() {
  const [closeAlert, setCloseAlert] = useState(false);
  if (closeAlert) {
    return <></>;
  }

  return (
    <motion.div
      transition={{ delay: 5 }}
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      className="toast toast-top z-40"
    >
      <div className="alert alert-info bg-red-400 text-white">
        <div className="">
          <button
            onClick={() => {
              setCloseAlert(true);
            }}
          >
            x
          </button>
          <span>
            We apologize for the inconvenience as this page is still under
            construction. Hope you enjoy what we already have available.
          </span>
        </div>
      </div>
    </motion.div>
  );
}
