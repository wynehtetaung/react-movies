import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <SkeletonTheme baseColor="#3100" highlightColor="#31363F99">
      <Skeleton height={"100%"} duration={2} />
    </SkeletonTheme>
  );
}
