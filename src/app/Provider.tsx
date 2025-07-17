// app/providers.tsx
"use client";
import { useUser } from "@clerk/nextjs";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { useEffect } from "react";
import { addUserToSupabase, getProducts, getUsers } from "./admin/Functions";

export function Providers({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  useEffect(() => {
    getUsers().then((res) => {
      const foundUser = res!.find(
        (itm) => itm.email === user?.emailAddresses[0].emailAddress
      );

      if (user && !foundUser) {
        console.log("Qo'shildi");

        addUserToSupabase({
          name: user.fullName!,
          email: user.emailAddresses[0].emailAddress,
          role: "USER",
          orders: [],
        }).then((res) => {
          console.log(res);
        });
      }
    });
  }, [user]);

  return <Provider store={store}>{children}</Provider>;
}
