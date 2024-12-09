import Link from "next/link";
import React from "react";

type SubProps = {
  title: string;
  bgimage?: string;
  description?: string;
  navlink?: {
    to: string;
    label: string;
    icon?: React.ReactElement;
  }[];
};


export default function SubHeader({
  title,
  bgimage,
  description,
  navlink,
}: SubProps) {


  return (
    <>
    <section className={`overflow-hidden bg-[url(${bgimage ? bgimage : "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"})] bg-cover bg-top bg-no-repeat h-64`}>
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-2 h-64">
        <nav aria-label="Breadcrumb" className="flex">
          <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
            <li className="flex items-center">
                {/* {navlink.map((dlink, index) => {
                    return (
                      <Link
                        href={dlink.to}
                        key={index}
                        className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                      >
                        {dlink.icon}
                        <span className="ms-1.5 text-xs font-medium">{dlink.label}</span>
                      </Link>
                    );
  
                })} */}
              <Link
                href="/"
                className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>

                <span className="ms-1.5 text-xs font-medium"> Home </span>
              </Link>
            </li>

            <li className="relative flex items-center">
              <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

              <Link
                href="#"
                className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
              >
                {title}
              </Link>
            </li>
          </ol>
        </nav>
        <div className="text-center ltr:sm:text-left rtl:sm:text-right mt-4">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
           {title}
          </h2>

          <p className="hidden  text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
           {description}
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
