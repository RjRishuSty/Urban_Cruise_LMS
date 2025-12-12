
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import {api} from '../utils/api';
import { userAuthenticated, userLogout } from "../store/slices/auth.slice";

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const { user,isAuthenticated } = useSelector((state) => state.auth);
  console.log("Pravite",user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        console.log("api",api)
        const response = await axios.get(`${api}/auth/me`, {
          withCredentials: true,
        });
        console.log("praviteResponse", response.data)
        dispatch(userAuthenticated(response.data));
      } catch (err) {
        dispatch(userLogout());
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
