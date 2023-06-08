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
      <form name="contact" method="POST" netlify>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label
            >Your Role:
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label
          >
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
* {
  font-family: "Montserrat", sans-serif;
}
</style>
