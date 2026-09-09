import React from "react";
import { useState, useEffect } from "react";

// 이미지도 "모듈"이다 — import하면 Vite가 번들에 포함시키고, 최종 URL 문자열을 돌려준다
import checkIcon from "../assets/icons/check.svg";
import alertIcon from "../assets/icons/alert.svg";

/**
 * Toast 컴포넌트
 */

const Toast = ({ type = "check", text = "" }) => {
  return (
    <div
      className={`flex w-95 items-center gap-2 rounded-lg px-5 py-3 ${type === "check" ? "bg-[#00BC7D]/80" : "bg-[#FF5558]/80"}`}
    >
      {type === "check" ? (
        <img src={checkIcon} alt="성공" />
      ) : (
        <img src={alertIcon} alt="경고" />
      )}
      <p className="text-sm font-semibold text-white">{text}</p>
    </div>
  );
};

/**
 * ToastManager 컴포넌트
 */

export const ToastManager = ({
  type,
  text,
  isOpen,
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(), 200);
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-24 right-7 z-50 -translate-x-1/2">
      <div
        className={`transition-all duration-300 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} `}
      >
        <Toast type={type} text={text} />
      </div>
    </div>
  );
};

export default Toast;
