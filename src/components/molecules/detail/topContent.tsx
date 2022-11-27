import TopImage from "components/atoms/detail/topImage";
import { TopImageText } from "components/atoms/detail/topImageText";
import { NavBar } from "./navBar";

export const TopContent = () => {
  return (
    <div>
      <TopImage />
      <NavBar />
      <TopImageText />
    </div>
  );
};
