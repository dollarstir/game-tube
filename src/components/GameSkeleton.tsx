import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";


function GameSkeleton() {
  return (
    <Card.Root width="280px" borderRadius={10} overflow={'hidden'}>
      <Skeleton height={"200px"} />
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
}

export default GameSkeleton;
