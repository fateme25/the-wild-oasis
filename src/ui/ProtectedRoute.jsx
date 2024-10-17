import styled from "styled-components";

import useFetchUser from "../features/authentication/useFetchUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1- load auth user data
  const { isAuthenticated, isLoading } = useFetchUser();

  //3- if there is not authenticated user redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // 2- while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4- if there is an authenticated user can access to App
  if (isAuthenticated)return children;
}

export default ProtectedRoute;
