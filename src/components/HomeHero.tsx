import React from 'react'

export default function HomeHero() {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Let us find your
              <strong className="block font-extrabold text-teal-400">
             Forever Home.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Home at its peak love, sweet houses
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
            <div className="absolute -bottom-12 bg-teal-600 h-28 w-full rounded-3xl flex justify-center items-center px-5">
              {/* five colums containt label and input then the last should be submit button */}
              <div className="flex gap-4 w-full">
                <div className="flex flex-col items-start justify-end flex-1">
                  <label
                    htmlFor="location"
                    className="mb-1 text-sm font-medium"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Preferred location"
                    id="location"
                    name="location"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-end flex-1">
                  <label htmlFor="price" className="mb-1 text-sm font-medium">
                    Price
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    id="price"
                    name="price"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-end flex-1">
                  <label
                    htmlFor="property"
                    className="mb-1 text-sm font-medium"
                  >
                    Property
                  </label>
                  <input
                    type="text"
                    placeholder="Property Type"
                    id="property"
                    name="property"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-end flex-1">
                  <label htmlFor="search" className="mb-1 text-sm font-medium">
                    Search
                  </label>
                  <input
                    type="text"
                    placeholder="Search Properties"
                    id="search"
                    name="search"
                    className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-end flex-1">
                  <button className="w-full px-4 py-3 text-sm font-medium text-white bg-rose-600 rounded-md shadow hover:bg-rose-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
