import React from "react";

const index = () => {
  return (
    <div className="bg-white">
      <div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-0"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900"> Color </span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-color-0"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          White{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-color-1"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          Beige{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          checked
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-color-2"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          Blue{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-color-3"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          Brown{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-color-4"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          Green{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-color-5"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          Purple{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-1"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900"> Category </span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div className="pt-6" id="filter-section-1">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-0"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          New Arrivals{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-1"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          Sale{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          checked
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-2"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          Travel{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-3"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          Organization{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-4"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          Accessories{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-2"
                      aria-expanded="false"
                    >
                      <span className="font-medium text-gray-900"> Size </span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>

                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div className="pt-6" id="filter-section-2">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-size-0"
                          name="size[]"
                          value="2l"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-0"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          2L{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-1"
                          name="size[]"
                          value="6l"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-1"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          6L{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-2"
                          name="size[]"
                          value="12l"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-2"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          12L{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-3"
                          name="size[]"
                          value="18l"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-3"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          18L{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-4"
                          name="size[]"
                          value="20l"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-4"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          20L{" "}
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="filter-size-5"
                          name="size[]"
                          value="40l"
                          type="checkbox"
                          checked
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-size-5"
                          className="ml-3 text-sm text-gray-600"
                        >
                          {" "}
                          40L{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="lg:col-span-3">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default index;
