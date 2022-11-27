import HomeTemplate from "components/templates/home/home";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "Alley";
  }, []);
  return (
    <>
      <HomeTemplate />
    </>
  );
};
