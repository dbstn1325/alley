import { IoIosArrowBack } from "react-icons/io";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
export const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <div>
      <IoIosArrowBack color="#FFFFFF" size={35} onClick={() => navigate(-1)} />
    </div>
  );
};
