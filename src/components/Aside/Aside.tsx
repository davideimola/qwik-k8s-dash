import { component$ } from "@builder.io/qwik";

const sidebarOpen = true;

export const Aside = component$(() => {
  return (
    <div
      class={`${
        sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
      }fixed inset-y-0 left-0 z-30 w-64 -translate-x-full transform overflow-y-auto bg-gray-900 transition duration-300 ease-in lg:static lg:inset-0 lg:translate-x-0`}
    >
      <div class="mt-8 flex items-center justify-center">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.12"
            height="32"
            viewBox="0 0 256 272"
          >
            <path
              fill="#18B6F6"
              d="m224.803 271.548l-48.76-48.483l-.744.107v-.532L71.606 120.252l25.55-24.667l-15.01-86.12l-71.222 88.247c-12.136 12.226-14.372 32.109-5.642 46.781l44.5 73.788c6.813 11.376 19.163 18.18 32.47 18.074l22.038-.213l120.513 35.406Z"
            />
            <path
              fill="#AC7EF4"
              d="m251.414 96.01l-9.795-18.075l-5.11-9.25l-2.023-3.615l-.212.213l-26.829-46.463C200.738 7.125 188.176-.105 174.55 0l-23.527.639l-70.158.213c-13.307.106-25.444 7.123-32.151 18.5l-42.69 84.632L82.353 9.25l100.073 109.937l-17.779 17.968l10.646 86.015l.107-.213v.213h-.213l.213.212l8.304 8.081l40.348 39.445c1.704 1.595 4.472-.318 3.3-2.339l-24.911-49.014l43.436-80.273l1.383-1.595c.533-.638 1.065-1.276 1.491-1.914c8.517-11.589 9.688-27.112 2.662-39.764Z"
            />
            <path
              fill="#FFF"
              d="M182.746 118.763L82.353 9.358l14.266 85.695l-25.55 24.773L175.08 223.065l-9.368-85.696z"
            />
          </svg>

          <span class="mx-2 text-2xl font-semibold text-white">Dashboard</span>
        </div>
      </div>

      <nav class="mt-10">
        <a
          class="mt-4 flex items-center bg-gray-700 bg-opacity-25 px-6 py-2 text-gray-100"
          href="/"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            ></path>
          </svg>

          <span class="mx-4">Deployments</span>
        </a>

        <a
          class="mt-4 flex items-center px-6 py-2 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          href="/ui-elements"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            ></path>
          </svg>

          <span class="mx-4">UI Elements</span>
        </a>

        <a
          class="mt-4 flex items-center px-6 py-2 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          href="/tables"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            ></path>
          </svg>

          <span class="mx-4">Tables</span>
        </a>

        <a
          class="mt-4 flex items-center px-6 py-2 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          href="/forms"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>

          <span class="mx-4">Forms</span>
        </a>
      </nav>
    </div>
  );
});
