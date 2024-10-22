import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar";
import SidebarProvider from "../../../providers/SidebarProvider";
import React from "react";
import FixedPlugin from "../components/fixedPlugin/FixedPlugin";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <FixedPlugin />
            <SidebarProvider>
                <section className="flex h-full w-full">
                    <Sidebar />

                    {/* Navbar & Main Content */}
                    <div className="h-full w-full bg-lightPrimary dark:!bg-orange-800">

                        {/* Main Content */}
                        <main className='mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]' >
                            {/* Routes */}
                            <div className="h-full">
                                <Navbar />

                                <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                                    {children}
                                </div>

                            </div>
                        </main>

                    </div>

                </section>
            </SidebarProvider>
        </>
    );
}

