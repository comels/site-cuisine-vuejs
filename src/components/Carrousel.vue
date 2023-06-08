<script setup></script>

<template>
  <div
    class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]"
  >
    <div
      class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"
    ></div>
    <div
      class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"
    ></div>
    <div
      class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"
    ></div>
    <div
      class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
    ></div>
    <div
      class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800"
    >
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
        class="dark:hidden w-[272px] h-[572px]"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
        class="hidden dark:block w-[272px] h-[572px]"
        alt=""
      />
    </div>
  </div>

  <div
    id="custom-controls-gallery"
    class="relative w-full"
    data-carousel="slide"
  >
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt=""
        />
      </div>
    </div>
    <div class="flex justify-center items-center pt-4">
      <button
        type="button"
        class="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
