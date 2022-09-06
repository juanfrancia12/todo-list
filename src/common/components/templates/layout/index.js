import Footer from "@common/components/organisms/footer";
import Header from "@common/components/organisms/header";
import Sidebar from "@common/components/organisms/sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-4 sm:px-12 md:px-32 md:grid md:grid-cols-3 md:gap-6 xl:grid-cols-4 h-full">
        <Sidebar />
        <section className="min-h-[calc(100vh-5rem)] h-max md:col-span-2 xl:col-span-3 py-6 md:py-10 flex flex-col gap-10">
          {children}
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
