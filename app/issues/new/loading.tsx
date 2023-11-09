import { Box } from "@radix-ui/themes";
import { Skeleton } from '../../components'

const LoadingNewIssuePage = () => {
  return (
    <Box className={"max-w-xl"}>
      <Skeleton />
      <Skeleton />
    </Box>
  );
};

export default LoadingNewIssuePage;
