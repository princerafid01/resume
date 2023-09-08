<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Experience
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Full-stack Developer <a href="https://www.ivivelabs.com" class="inline-block vegas-gold font-bold" target="_blank">@Ivivelabs</a>
          </h4>

          <span>Jun 2021 - Present</span>

          <p class="timeline-text">
            My responsibilities include creating both the frontend and backend components for an in-house project called surveyflip, which functions similarly to Google Forms. Within this application, I work on various modules that contribute to its overall functionality.<br><br>

            Some notable achievements from my work include:
            <ul>
              <li> - Building a highly concurrent and performant API using Laravel Octane.</li>
              <li> - Integrating these APIs seamlessly into React applications.</li>
              <li> - Designing reusable and testable React components.</li>
              <li> - Establishing a payment system similar to a marketplace using Stripe.</li>
              <li> - Creating a user-friendly form builder to facilitate the creation of surveys.</li>
              <li> - Implementing the Survey Assessment module to assess collected data effectively.</li>
              <li> - Setting up a CI/CD pipeline through GitHub actions.</li>
            </ul>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Full Stack Developer @FarukExpress
          </h4>

          <span>Nov 2020 - Jun 2021 </span>

          <p class="timeline-text">
            I was engaged in a significant project as a key contributor to the development of a Customer Relationship Management (CRM) application. This application monitors the entire product journey, from supplier to end customer, and offers reports with both statistical and visual insights. The primary technology stacks utilized were Laravel and jQuery. <br><br>

            <ul>
              <li> - I have successfully tackled the challenge of enhancing the speed of a slow Datatable within the application, resulting in improved efficiency and user satisfaction.</li>
              <li> - Concurrently managing multiple client projects that revolve around WordPress plugin development. These projects involve making custom solutions that fit exactly what the client needs.</li>
            </ul>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Full Stack Developer <a href="https://softnursery.com" class="inline-block vegas-gold font-bold" target="_blank">@SoftNursery Ltd.</a>
          </h4>

          <span>May 2020 - Nov 2020</span>

          <p class="timeline-text">
            I had the opportunity to work on various projects. One of my notable achievements was the development of a Consulting firm's application using Laravel, Vue.js, and jQuery.
            Noteworthy achievements from this project include:<br><br>

            <ul>
              <li>- Successfully implemented various exciting features, including a real-time chat system for consultancy, a consultation schedule management system, and an effective notification system.</li>
              <li>- Integrated Zoom and BigBlueButton as mediums for video chat, enhancing client-consultant interactions and providing more interactivity for the firm's users.</li>
            </ul>
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Education
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            University of Dhaka
          </h4>

          <span>2017 — 2023</span>

          <p class="timeline-text">
            Bachelor of Business Administration - BBA, Marketing
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Beginner JavaScript! <a href="https://beginnerjavascript.com" class="inline-block vegas-gold font-bold" target="_blank">@Wesbos</a>
          </h4>

          <span>2018 — 2019</span>

          <p class="timeline-text">
            A fun, exercise heavy approach to learning Modern JavaScript from scratch
          </p>
        </li>
      </ol>
    </section>

    <!-- <section class="skill">
      <h3 class="h3 skills-title">
        My skills
      </h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Web design
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Graphic design
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Branding
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              WordPress
            </h5>
            <data value="50">50%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 50%;" />
          </div>
        </li>
      </ul>
    </section> -->
  </article>
</template>
