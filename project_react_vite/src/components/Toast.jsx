
import { useState, useEffect } from "react";


const Toast = ({ type = "check", text = "" }) => {

 return (

 <div

 className={`flex w-95 items-center gap-2 rounded-lg px-5 py-3
${type === "check" ? "bg-main-1" : "bg-error"}`}

 >

 {type === "check" ? (

 <img src="/icons/check.svg" />

 ) : (

 <img src="/icons/alert.svg" />

 )}

 <p className="text-sm font-semibold text-white">{text}</p>

 </div>

 );

};

export const ToastManager = ({

 type,

 text,

 isOpen,

 duration = 3000, // 3초

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

 className={`transition-all duration-300 ease-out ${visible
? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} `}

 >

 <Toast type={type} text={text} />

 </div>

 </div>

 );

};


export default Toast;