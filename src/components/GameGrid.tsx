import { SimpleGrid } from "@chakra-ui/react";
import UseGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = UseGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!loading &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
