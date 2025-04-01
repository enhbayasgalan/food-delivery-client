    "use client";

    import { useQuery } from "@tanstack/react-query";
    import axios from "axios";
    import { createContext, ReactNode, useContext, useState } from "react";

    type UserContext = {
        user : User[] | null
        openAddress : boolean
        setOpenAddress : (openAddress : boolean) => void
        refetchOrder : ()=>void
    }

    type User = {
        email: string;
        address: string;
    };

    const getUserOrder = async (): Promise<User[]> => {
        try {
            const response = await axios.get("https://food-delivery-service-0wy6.onrender.com/user");
            console.log("user fetched:", response.data); 
            return response.data; 
        } catch (error) {
            console.error("Error fetching user", error);
            throw new Error("Failed to fetch user"); 
        }
    };

    const UserContextType = createContext<UserContext | null>(null);

    export const UserProvider = ({ children }: { children: ReactNode }) => {
        const [openAddress, setOpenAddress] = useState(false)
        const { data: user, refetch: refetchOrder } = useQuery({
            queryKey: ["getUserEmail"],
            queryFn: getUserOrder, 
        });

        return (
            <UserContextType.Provider value={{ user: user ?? null,  refetchOrder, openAddress, setOpenAddress}}>
                {children}
            </UserContextType.Provider>
        );
    };

    export const useOrder = () => {
        const context = useContext(UserContextType);
        if (!context) {
            throw new Error("useOrder must be used within an OrderProvider"); 
        }
        return context;
    };