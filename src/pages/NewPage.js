import { useLocation } from "react-router-dom";

const NewPage = () => {
  const { state } = useLocation();
  const loc = useLocation();
  console.log(loc)
  return (
    <>
      <h1>New page</h1>
      {state?.from && <p>From {state.from}</p>}
    </>
  );
};

export default NewPage;
