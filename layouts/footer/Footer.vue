<template>
  <div id="footer" class="bg-primary py-16 px-10 md:px-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex flex-col space-y-4">
        <nuxt-link to="/">
          <nuxt-img
            class="h-16"
            format="webp"
            src="https://a.storyblok.com/f/228790/949x331/45e5d445e5/compact-hydro-logo-file_horizontal-1-for-blue-bg.png"
          >
          </nuxt-img>
        </nuxt-link>
        <h4 class="text-secondary font-semibold text-xl uppercase">
          Get in Touch
        </h4>
        <div class="flex flex-col space-y-4">
          <div class="flex space-x-2 items-center">
            <Icon class="text-white" size="25" name="uil:home" />
            <p class="text-white font-normal text-md">
              P.o Box 2547-00100 Suraj Plaza Limuru Road
            </p>
          </div>

          <div class="flex space-x-2 items-center">
            <Icon class="text-white" size="25" name="uil:envelope-open" />
            <p class="text-white font-normal text-md">
              info@compacthydro.co.ke
            </p>
          </div>
          <div class="flex space-x-2 items-center">
            <Icon class="text-white" size="25" name="uil:phone-alt" />
            <p class="text-white font-normal text-md">(254 )750 440 044</p>
          </div>
        </div>
        <h4
          class="text-secondary pb-2 font-semibold text-xl uppercase border-b-4 w-20 mt-1 border-b-secondary"
        >
          About
          <!-- <div class="border-b-4 w-20 mt-1 border-b-secondary"></div> -->
        </h4>
        <p class="text-white text-lg">
          Compact Hydro Solutions Ltd, established in 2009 to provide
          independent water supply solutions, offers services such as borehole
          drilling, pump installation, and water pan construction. We also have
          an online store for related products
        </p>
      </div>
      <div class="flex flex-col space-y-6">
        <div
          class="flex flex-col space-y-4 divide-y divide-secondary w-1/2 text-white text-lg"
        >
          <nuxt-link class="hover:text-secondary" to="/">About</nuxt-link>

          <nuxt-link to="/#services" class="hover:text-secondary"
            >Services</nuxt-link
          >

          <a
            href="https://shop.compacthydro.co.ke/"
            target="_blank"
            class="hover:text-secondary"
            >Shop</a
          >
          <nuxt-link class="hover:text-secondary" to="/contact"
            >Contact</nuxt-link
          >
          <div></div>
        </div>
        <div class="flex space-x-7">
          <div class="flex flex-col space-y-3">
            <h4 class="text-secondary font-semibold uppercase">Follow Us</h4>
            <div class="flex flex-col space-y-3">
              <a
                class="text-white hover:text-secondary"
                href="https://www.facebook.com/compacthydro.co.ke/"
                target="_blank"
                >Facebook</a
              >
              <a
                class="text-white hover:text-secondary"
                href="https://www.linkedin.com/company/compact-hydro-solutions/"
                target="_blank"
                >LinkedIn</a
              >
            </div>
          </div>
          <div class="flex flex-col space-y-3">
            <h4 class="text-secondary font-semibold uppercase">Company</h4>
            <div class="flex flex-col space-y-3">
              <a
                class="text-white hover:text-secondary"
                href="https://a.storyblok.com/f/228790/x/02acf09d53/terms-and-conditions.pdf"
                target="_blank"
                download
                >Terms & Conditions</a
              >
              <a
                class="text-white hover:text-secondary"
                download
                href="https://a.storyblok.com/f/228790/x/c19e3de1d2/privacy-policy.pdf"
                target="_blank"
                >Privacy Policy</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* #footer {
	background-image: url('https://a.storyblok.com/f/228790/1280x850/293b7cfdd6/footer.jpg/m/');
	background-repeat: no-repeat;
	background-size: contain;
} */
</style>
