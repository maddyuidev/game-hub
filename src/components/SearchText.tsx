import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchText = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <Input ref={ref} borderRadius="20px" placeholder="Searching..." />
      </InputGroup>
    </form>
  );
};

export default SearchText;
