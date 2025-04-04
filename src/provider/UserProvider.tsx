"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type UserContext = {
  user: User | undefined;
  openAddress: boolean;
  setOpenAddress: (openAddress: boolean) => void;
  refetchOrder: () => void;
};

type User = {
  email: string;
  address: string;
};

const getUserOrder = async (): Promise<User> => {
  try {
    const response = await axios.get(
      "https://food-delivery-service-0wy6.onrender.com/user"
    );
    console.log("user fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user", error);
    throw new Error("Failed to fetch user");
  }
};

const UserContextType = createContext<UserContext | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      if (path === "/singup") {
        setLoading(false);
        return;
      }
      router.push("/loginpage");
      setLoading(false);
    }
    setLoading(false);
  }, []);
  const [openAddress, setOpenAddress] = useState(false);
  const { data: user, refetch: refetchOrder } = useQuery({
    queryKey: ["getUserEmail"],
    queryFn: getUserOrder,
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <UserContextType.Provider
      value={{ user: user, refetchOrder, openAddress, setOpenAddress }}
    >
      {children}
    </UserContextType.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContextType);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
