<script setup lang="ts">
</script>

<template>
  <main>
    <article class="hero">
      <h1>The Reliable Auto Service</h1>
      <p>Your trusted partner for all automotive needs.</p>
      <a href="#services" class="primary-cta" role="button">Explore Our Services</a>
    </article>

    <section id="services" class="services-section container">
      <h2>Our Services</h2>
      <ul class="grid">
        <li>
          <article>
            <h3>Oil Changes</h3>
            <p>Keep your engine running smoothly with regular oil changes.</p>
          </article>
        </li>
        <li>
          <article>
            <h3>Brake Services</h3>
            <p>Ensure your safety with top-quality brake inspections and repairs.</p>
          </article>
        </li>
        <li>
          <article>
            <h3>Engine Diagnostics</h3>
            <p>Advanced testing and diagnostics for modern engine systems.</p>
          </article>
        </li>
      </ul>
      <a href="/appointments" class="secondary-cta" role="button">Book an Appointment</a>
    </section>

    <section class="why-choose-us container">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>
          <strong>Experienced Technicians:</strong> Certified experts with years of experience.
        </li>
        <li>
          <strong>High-Quality Parts:</strong> We use OEM or better components for lasting repairs.
        </li>
        <li>
          <strong>Transparent Pricing:</strong> We believe in honest quotes and clear invoices.
        </li>
      </ul>
    </section>

    <hr>

    <section class="testimonial container">
      <blockquote>
        "They diagnosed my engine issue quickly and got me back on the road. Outstanding service!"
      </blockquote>
      <p class="testimonial-author">— Sarah W., Satisfied Customer</p>
      <a href="/contact" class="primary-cta" role="button">Get in Touch</a>
    </section>
  </main>
</template>

<style scoped>
ul.grid li {
  list-style: none;
}

.hero {
  text-align: center;
  margin-top: 2rem;
  padding: 4rem 1rem;
  border-radius: 0.5rem;
}

.primary-cta {
  display: inline-block;
  margin-top: 1rem;
  color: var(--pico-contrast-color, #fff);
  background-color: var(--pico-primary-color, #3c79f5);
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 0.25rem;
}

.secondary-cta {
  margin-top: 2rem;
  display: inline-block;
}

.services-section {
  margin-top: 3rem;
  text-align: center;
}

.services-section article {
  text-align: left;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

.why-choose-us {
  margin: 3rem;
}

.testimonial {
  margin-top: 3rem;
  text-align: center;
}

.testimonial-author {
  font-style: italic;
  margin: 0.5rem 0 1.5rem 0;
}
</style>
