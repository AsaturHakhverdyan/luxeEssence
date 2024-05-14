import { ClipLoader } from "react-spinners";

const Loader = ({ loading, size }: { loading: boolean, size: number }) => {
  return (
    <>
      <ClipLoader
        loading={loading}
        size={size}
        color="cyan"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loader;
