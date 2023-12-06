import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header class="flex items-center justify-between border-b-4 border-indigo-600 bg-white px-6 py-4">
      <div class="flex items-center">
        <button class="text-gray-500 focus:outline-none lg:hidden">
          <svg
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>

        <div class="relative mx-4 lg:mx-0">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            class="form-input w-32 rounded-md pl-10 pr-4 border-2 border-gray-300 p-2 focus:border-indigo-600 sm:w-64"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div class="flex items-center">
        <div x-data="{ notificationOpen: false }" class="relative">
          <button class="mx-4 flex text-gray-600 focus:outline-none">
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>

          <div
            x-show="notificationOpen"
            class="fixed inset-0 z-10 h-full w-full"
            style="display: none;"
          ></div>

          <div
            x-show="notificationOpen"
            class="absolute right-0 z-10 mt-2 w-80 overflow-hidden rounded-lg bg-white shadow-xl"
            style="width: 20rem; display: none;"
          >
            <span
              class="-mx-2 flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white"
            >
              <img
                class="mx-1 h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                alt="avatar"
              />
              <p class="mx-2 text-sm">
                <a class="font-bold" href="#">
                  Sara Salah
                </a>{" "}
                replied on the{" "}
                <a class="font-bold text-indigo-400" href="#">
                  Upload Image
                </a>{" "}
                artical . 2m
              </p>
            </span>
            <span
              class="-mx-2 flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white"
            >
              <img
                class="mx-1 h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                alt="avatar"
              />
              <p class="mx-2 text-sm">
                <a class="font-bold" href="#">
                  Slick Net
                </a>{" "}
                start following you . 45m
              </p>
            </span>
            <span
              class="-mx-2 flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white"
            >
              <img
                class="mx-1 h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                alt="avatar"
              />
              <p class="mx-2 text-sm">
                <a class="font-bold" href="#">
                  Jane Doe
                </a>{" "}
                Like Your reply on{" "}
                <a class="font-bold text-indigo-400" href="#">
                  Test with TDD
                </a>{" "}
                artical . 1h
              </p>
            </span>
            <span
              class="-mx-2 flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white"
            >
              <img
                class="mx-1 h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80"
                alt="avatar"
              />
              <p class="mx-2 text-sm">
                <a class="font-bold" href="#">
                  Abigail Bennett
                </a>{" "}
                start following you . 3h
              </p>
            </span>
          </div>
        </div>

        <div x-data="{ dropdownOpen: false }" class="relative">
          <button class="relative block h-8 w-8 overflow-hidden rounded-full shadow focus:outline-none">
            <img
              class="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
              alt="Your avatar"
              height={80}
              width={80}
            />
          </button>

          <div
            x-show="dropdownOpen"
            class="fixed inset-0 z-10 h-full w-full"
            style="display: none;"
          ></div>

          <div
            x-show="dropdownOpen"
            class="absolute right-0 z-10 mt-2 w-48 overflow-hidden rounded-md bg-white shadow-xl"
            style="display: none;"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              Profile
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              Products
            </a>
            <a
              href="/login"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});
