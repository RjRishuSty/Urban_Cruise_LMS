import React, { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { api } from "../utils/api";
import {
  userAuthenticated,
  userLogout,
  authCheckCompleted,
} from "../store/slices/auth.slice";
import DashboardSkeleton from "../loader/DashboardSkeleton";
import { useMediaQuery } from "@mui/material";
import LoginSkeleton from "../loader/LoginSkeleton";

const AuthInitializer = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const { authChecked } = useSelector((state) => state.auth, shallowEqual);

  const checkAuth = useCallback(async () => {
    try {
      const res = await axios.get(`${api}/auth/me`, {
        withCredentials: true,
      });
      dispatch(userAuthenticated(res.data));
    } catch {
      dispatch(userLogout());
    } finally {
      dispatch(authCheckCompleted());
    }
  }, [dispatch]);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!authChecked) {
    return isMobile?<LoginSkeleton/>:<DashboardSkeleton/>
  }

  return children;
};

export default React.memo(AuthInitializer);
