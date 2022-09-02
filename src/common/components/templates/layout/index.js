import Footer from "@common/components/organisms/footer";
import Header from "@common/components/organisms/header";
import Sidebar from "@common/components/organisms/sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-32 grid grid-cols-4 gap-6 h-full">
        <Sidebar />
        <section className="min-h-[calc(100vh-5rem)] h-max col-span-3 py-10 flex flex-col gap-10">
          {children}
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
