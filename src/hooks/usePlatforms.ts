import useData from "./useData";
import { Platform } from "./useGames";

interface Props {
  onSelectPlatform: Platform;
}

const UsePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default UsePlatforms;
