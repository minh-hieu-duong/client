import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { AuthState, setCredentials, logOut } from "./auth/authSlice";
import { RootState } from "../stores/store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://minhhieu1234-001-site1.btempurl.com/api",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const authState = (api.getState() as RootState).auth;
    const { accessToken, refreshToken } = authState;

    const refreshResult = await baseQuery("/Account/Refresh", api, {
      method: "POST",
      body: { refreshToken, accessToken },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (refreshResult?.data) {
      const { accessToken, refreshToken, user } =
        refreshResult.data as AuthState;
      // store the new token
      api.dispatch(setCredentials({ accessToken, refreshToken, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});
