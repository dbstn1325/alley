import Area from "components/atoms/home/Area";
import Distance from "components/atoms/home/distance";
import SubTitle from "components/atoms/home/sub_title";
import Title from "components/atoms/home/title";
import NavButton from "components/atoms/nav/nav_button";
import ItemInfo from "components/molecules/home/item_info";
import AlleyItem from "components/organisms/home/alley_item";

export const Home = () => {
  return (
    <>
      <NavButton text="Magazine"></NavButton>
      <NavButton text="Shop"></NavButton>
      <Distance distance="364m"></Distance>
      <AlleyItem
        area="진해"
        title1="진해에서 만나는"
        title2="작은 겨울왕국"
        subTitle="따끈한 어묵도 먹을 수 있는 플레이스"
      />
    </>
  );
};
