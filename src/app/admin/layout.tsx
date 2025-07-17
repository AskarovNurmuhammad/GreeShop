import { pacifico } from "@/app/ui/fonts";
import Links from "./Links";
import "@/app/styles/dashboard.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-2">
      <aside className="bg-white text-black p-2 flex flex-col gap-2 w-2/11 h-[100vh] absolute top-0">
        <h1 className={`text-green-600 ${pacifico.className} p-2 text-3xl`}>
          GreenShop
        </h1>
        <div className="w-full bg-[#F4F5F7] h-0.5 mt-7"></div>
        <Links />
      </aside>
      <div className="p-4 w-9/11 absolute right-0">{children}</div>
    </div>
  );
}
