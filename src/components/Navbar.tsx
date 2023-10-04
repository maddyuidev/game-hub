import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchText from "./SearchText";
interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchText onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
