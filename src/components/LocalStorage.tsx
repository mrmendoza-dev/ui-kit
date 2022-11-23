import React, { useState } from "react";

export default function LocalStorage() {
    let cookie = true;

    function getStorage() {
      let cookie: any = JSON.parse(localStorage.getItem("cookie") || "false");
      if (cookie != undefined) {
        return cookie;
      } else {
        localStorage.setItem("cookie", JSON.stringify(false));
        return false;
      }
    }

    function setStorage() {
        localStorage.setItem("darkMode", JSON.stringify(cookie));
    }

  return (
    <div className="LocalStorage" id="localstorage">

    </div>
  );
}
