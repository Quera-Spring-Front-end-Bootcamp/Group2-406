import { createContext, useContext, useState } from "react";
import { baseurl } from "../../assets/baseUrl";
import { useEffect } from "react";
import axios from "axios";

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [refreshToken, setRefreshToken] = useState(() => {
        return localStorage.refreshToken ? localStorage.refreshToken : "";
    });
    const [token, setToken] = useState(() => {
        return localStorage.token ? localStorage.token : null;
    });

    useEffect(() => {
        async function refresh() {
            await axios
                .post(baseurl + "/auth/refreshToken", {
                    refreshToken: refreshToken,
                })
                .then((response) => {
                    localStorage.token = response.data.accessToken;
                    setToken(response.data.accessToken);
                });
        }
        refresh();
    }, []);

    const login = (token, refreshToken) => {
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        setToken(token);
        setRefreshToken(refreshToken);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        setToken(null);
        setRefreshToken("");
    };

    return (
        <AuthContext.Provider value={{ token, setToken, refreshToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext)