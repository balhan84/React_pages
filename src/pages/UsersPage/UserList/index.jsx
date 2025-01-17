import { useEffect } from "react";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(10);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    fetch(
      `https://randomuser.me/api/?page=${currentPage}&results=${results}&seed=pe2024`
    )
      .then((response) => response.json())
      .then(({ results }) => setUsers(results))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  }, [currentPage]);

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };
  const goNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  return (
    <>
      <div>
        <button onClick={goPrevPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        <button onClick={goNextPage}>{">"}</button>
      </div>
      <ul>
        {error && <div style={{ color: "red" }}>ERROR !!!</div>}
        {isFetching && <PacmanLoader color="green" speedMultiplier={1} />}
        {!error &&
          !isFetching &&
          users.map((u) => (
            <li key={u.login.uuid}>
              {Object.keys(u).map((key) => (
                <p key={key}>
                  {key}: {JSON.stringify(u[key])}
                </p>
              ))}
            </li>
          ))}
      </ul>
    </>
  );
}

export default UserList;
