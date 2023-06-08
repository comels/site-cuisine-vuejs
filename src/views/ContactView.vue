<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-3xl font-medium text-center text-gray-900 dark:text-white"
      >
        ME CONTACTER
      </h2>
      <p
        class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg"
      >
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>
      <form
        accept-charset="UTF-8"
        action="https://www.formbackend.com/f/bf7e7309978cdf15"
        method="POST"
        class="space-y-8"
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            class="block p-3 w-full text-gray-900 bg-gray-50 text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-yellow-300 focus:border-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Nom"
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Adresse e-mail"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-300 focus:border-yellow-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Téléphone ( facultatif )"
          />
        </div>
        <div class="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-yellow-300 focus:border-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-yellow-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Envoyer
        </button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
* {
  font-family: "Montserrat", sans-serif;
}
</style>
