import MainFooter from "@/components/footer/main-footer";
import MainHeader from "@/components/header/main-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main className="flex-1 mt-16 lg:mt-[110px]">{children}</main>
      <MainFooter />
    </>
  );
}
