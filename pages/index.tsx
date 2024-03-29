import Head from 'next/head';

import { NAME } from '~/constants';

import styles from '~/styles/home.module.scss';

function HomePage() {
  const title = `${NAME} \u2014 Front-end Developer`;

  return (
    <main className={styles.root}>
      <Head>
        <title>{title}</title>
        <meta name="author" content={NAME} />
        <meta
          name="description"
          content="Software Engineer, Front-end Developer. Master’s degree in Information Technologies Software. Focused on React development and its ecosystem."
        />
        <meta
          name="google-site-verification"
          content="qJrjbErgOsTHaoSdBWT0td6HQwtDcjPwMldWWZ99cFQ"
        />
      </Head>
      <article>
        <section>
          <h1>{NAME}</h1>
          <h2>Front-end Developer</h2>
          <p>
            I’m a <strong>Software Engineer</strong> specializing in{' '}
            <strong>Front-end development</strong>. I graduated with a{' '}
            <strong>Master’s</strong> degree in{' '}
            <strong>Information Technologies Software</strong>. I’ve been
            writing code since 2003. At the moment I am focused on{' '}
            <strong>React</strong> development and its ecosystem. Passionate
            about modern technology. Attentive to details.
          </p>
          <p>
            I’ve written code for{' '}
            <a
              href="https://www.epicgames.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Epic Games
            </a>
            ,{' '}
            <a
              href="https://square-enix-games.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Square Enix
            </a>
            ,{' '}
            <a
              href="https://www.imax.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IMAX
            </a>
            ,{' '}
            <a
              href="https://www.viacomcbs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viacom
            </a>
            , and countless startups.
          </p>
        </section>
        <section>
          <h2>Contacts</h2>
          <address>
            <div>
              Telegram:{' '}
              <a
                href="https://telegram.me/DenisShvets"
                target="_blank"
                rel="noopener noreferrer"
              >
                @DenisShvets
              </a>
            </div>
            <div>
              Email:{' '}
              <a href="mailto:denis.shvets.a+gh.pages@gmail.com">
                denis.shvets.a+gh.pages@gmail.com
              </a>
            </div>
            <div>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/denisshvets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                denisshvets
              </a>
            </div>
          </address>
        </section>
        <section>
          <h2>Summary of Qualifications</h2>
          <ul>
            <li>
              Strong core front-end background: <strong>HTML</strong>,{' '}
              <strong>CSS</strong>, and <strong>JavaScript</strong>.
            </li>
            <li>
              Experience in CSS preprocessors: <strong>SASS</strong>, LESS, and
              PostCSS
            </li>
            <li>
              Experience in HTML preprocessors and Template Systems: Nunjucks,
              Mustache, Thymeleaf, HAML, <strong>Pug</strong>, Twig, Smarty, and
              Jekyll
            </li>
            <li>
              Experience in JavaScript preprocessors:{' '}
              <strong>TypeScript</strong>, and CoffeeScript
            </li>
            <li>
              Experience in many JavaScript libraries and frameworks including
              the most significant and popular: <strong>Reaсt</strong>,{' '}
              <strong>Next</strong>, <strong>React Hook Form</strong>,{' '}
              <strong>SWR</strong>, <strong>React Query</strong>, Axios,{' '}
              <strong>React Select</strong>, React Native, Redux,{' '}
              <strong>Lodash</strong>, Styled Components, Emotion, jQuery,
              Apollo, Angular, Vue, Nuxt, Electron, GSAP, <strong>D3</strong>,
              three.js, Knockout, Kinetic, Autobahn, <strong>Socket.io</strong>,
              Backbone, Underscore, Ember, and RequireJS
            </li>
            <li>
              Experience in best Testing and Quality tools:{' '}
              <strong>Jest</strong>, <strong>React Testing Library</strong>,
              <strong>Cypress</strong>, Enzyme, <strong>ESLint</strong>,{' '}
              <strong>Prettier</strong>, and Sentry
            </li>
            <li>
              Experience in various tools and services: <strong>Webpack</strong>
              , <strong>Docker</strong>, <strong>npm</strong>,{' '}
              <strong>yarn</strong>, <strong>JIRA</strong>,{' '}
              <strong>Confluence</strong>, <strong>GitHub</strong>, GitHub
              Actions, GitLab, OpenID Connect, CircleCI, Stripe, Stash,
              Crucible, GraphQL, Gulp, Grunt, PuTTY, Virtual Box, Bower,
              Bootstrap, Foundation, Material Design, Ant Design, and Yeoman
            </li>
            <li>
              Made integration with different CMS: <strong>Strapi</strong>,
              WordPress, Orchard, Drupal, as some custom builds
            </li>
            <li>
              Intermediate skills in Design tools: <strong>Photoshop</strong>,{' '}
              <strong>Illustrator</strong>, and <strong>Sketch</strong>
            </li>
            <li>
              I’m using different methodologies: <strong>BEM</strong>, SMACSS,
              ACSS, OOCSS, <strong>Mobile First</strong>,{' '}
              <strong>Base First</strong>, <strong>Jamstack</strong>, SPA,
              Parallax, <strong>Responsive Web Design</strong>, and
              Compatibility with modern and legacy browsers
            </li>
            <li>
              Also, I know and using modern HTML5 technologies: Semantics,
              Connectivity(<strong>Web Sockets</strong>), Offline &
              Storage(Storage and FileReader), 2D/3D Graphics & Effects(
              <strong>SVG</strong> and Canvas), Performance &
              Integration(History API, Drag and Drop, Animation, Fullscreen
              API), and Styling
            </li>
            <li>
              Experience with different VCS: <strong>Git</strong>, SVN, and
              Perforce
            </li>
            <li>Some experience in DB: Mongo, PostgreSQL, Oracle, and MySQL</li>
            <li>Some experience in back-end: Node.js, PHP, Python, and Java</li>
          </ul>
        </section>
        <section>
          <h2>Career History</h2>
          <h3>Globant</h3>
          <p>
            Lead Software Engineer <br />
            August 2018 &ndash; Present <br />
            Minsk, Belarus
          </p>
          <dl>
            <dt>
              <h4>SLiC</h4>
            </dt>
            <dd>
              <p>
                At present time I’m working on the <strong>Creators</strong> and{' '}
                <strong>Consumer</strong> web applications for{' '}
                <strong>SLiC</strong> as a <strong>Technical Lead</strong>. On
                the project, we use the modern architecture{' '}
                <strong>Jamstack</strong>. <strong>Yarn workspaces</strong> to
                organize the applications and shared components.{' '}
                <strong>Next.js</strong> as core framework with{' '}
                <strong>SASS</strong>, <strong>React</strong> and{' '}
                <strong>TypeScript</strong> under the hood. For forms used the
                proven <strong>React Hook Form</strong>. For API integration
                used <strong>SWR</strong> &mdash; React Hooks for Data Fetching.
                The applications integrated with <strong>Strapi</strong> &mdash;
                headless CMS and <strong>Stripe</strong> &mdash; payments
                infrastructure. The unit and integration tests used the{' '}
                <strong>Jest</strong> and <strong>React Testing Library</strong>
                . E2E tests used <strong>Cypress</strong>. As code quality tools
                are used <strong>ESLint</strong> and <strong>Prettier</strong>.
                The development team consists of 7 people located in 5 different
                time zones.
              </p>
              <p>
                At the project, I’m responsible for architecture, technical
                solution, functional and technical analysis, sprint goals
                accomplish, sprint estimation, removal impediments, refactoring,
                code review, product quality, communication with the customer,
                and demo.
              </p>
            </dd>
            <dt>
              <h4>Epic Games</h4>
            </dt>
            <dd>
              <p>
                Worked on the <strong>Mediatonic Player Portal</strong> web
                application for <strong>Epic Games</strong> as a{' '}
                <strong>Front-end Lead</strong>. On the project, we used the
                modern architecture <strong>Jamstack</strong>.{' '}
                <strong>Next.js</strong> as core framework with{' '}
                <strong>SASS</strong>, <strong>React</strong> and{' '}
                <strong>TypeScript</strong> under the hood. For forms used the
                proven <strong>React Hook Form</strong>. For API integration
                used <strong>SWR</strong> &mdash; React Hooks for Data Fetching.
                The unit and integration tests used the <strong>Jest</strong>{' '}
                and <strong>React Testing Library</strong>. E2E tests used{' '}
                <strong>Cypress</strong>. As code quality tools are used{' '}
                <strong>ESLint</strong> and <strong>Prettier</strong>. The
                development team consists of 3 people located at the same place.
              </p>
              <p>
                At the project, I was responsible for architecture, sprint goals
                accomplish, sprint estimation, removal impediments, refactoring,
                code review, product quality, communication with the customer,
                and demo.
              </p>
            </dd>
            <dt>
              <h4>Square Enix</h4>
            </dt>
            <dd>
              <p>
                Worked on the <strong>Stargate</strong> web application for{' '}
                <strong>Square Enix</strong> as a{' '}
                <strong>Front-end Lead</strong>. It was an old company project
                where our goal was to develop new features, integrate quality
                tools, and make refactoring. On the project, we used{' '}
                <strong>SASS</strong>, and <strong>React</strong> with{' '}
                <strong>TypeScript</strong> and <strong>Redux</strong>. For API
                integration used <strong>Axios</strong> &mdash; Promise based
                HTTP client for the browser and Node.js. As code quality tools
                are used <strong>ESLint</strong> and <strong>Prettier</strong>.
                The development team consists of 3 people located at the same
                place.
              </p>
              <p>
                At the project, I was responsible for new features development,
                sprint goals accomplish, sprint estimation, refactoring, code
                review, product quality, communication with the customer, and
                demo.
              </p>
            </dd>
            <dt>
              <h4>StartWire</h4>
            </dt>
            <dd>
              <p>
                Worked on the <strong>StartWire</strong> job search web
                application as a <strong>Front-end Developer</strong>. It was an
                old company project where our goal was to migrate from Angular
                v1 to React, develop new features, integrate quality tools, and
                make refactoring. On the project, we used <strong>SASS</strong>{' '}
                and <strong>React</strong> with <strong>TypeScript</strong> and{' '}
                <strong>Redux</strong>. For API integration used native{' '}
                <strong>Fetch</strong>. As code quality tools are used{' '}
                <strong>ESLint</strong> and <strong>Prettier</strong>. The
                development team consists of 5 people located at the same place.
              </p>
              <p>
                At the project, I was responsible for new features development,
                sprint goals accomplish, sprint estimation, refactoring, product
                quality, and communication with the customer.
              </p>
            </dd>
          </dl>
          <h3>Sivintech</h3>
          <p>
            Lead Software Engineer <br />
            April 2018 &ndash; August 2018 <br />
            Minsk, Belarus
          </p>
          <dl>
            <dt>
              <h4>State University of New York</h4>
            </dt>
            <dd>
              <p>
                Worked on <strong>E-Plus</strong> &mdash; Education CRM for the{' '}
                <strong>State University of New York</strong> as a{' '}
                <strong>Front-end Developer</strong>. On the project, we used{' '}
                <strong>SASS</strong>, <strong>React</strong>, and{' '}
                <strong>Redux</strong>. For API integration used{' '}
                <strong>Axios</strong> — Promise based HTTP client for the
                browser and Node.js. As code quality tools are used{' '}
                <strong>ESLint</strong> and <strong>Prettier</strong>. The
                development team consists of 5 people located at the same place.
              </p>
              <p>
                At the project, I was responsible for new features development,
                sprint goals accomplish, sprint estimation, refactoring, code
                review, product quality, and communication with the customer.
              </p>
            </dd>
          </dl>
          <h3>Besk</h3>
          <p>
            Lead Software Engineer <br />
            January 2018 &ndash; April 2018 <br />
            Minsk, Belarus
          </p>
          <p>
            Worked on <strong>Bankera</strong> &mdash; Open Bank Account
            Alternative Online, <strong>CoinSupply</strong>, and{' '}
            <strong>Socium Trade</strong> cryptocurrency exchange web
            applications as a <strong>Team Lead</strong>. On the products, we
            used <strong>SASS</strong>, <strong>React</strong>, and{' '}
            <strong>Redux</strong>. For API integration used native{' '}
            <strong>Fetch</strong>. <strong>Three.js</strong> &mdash; JavaScript
            3D Library for complex 3D visualizations. As a code quality tool is
            used <strong>ESLint</strong>. The development team consists of 3
            people located at the same place.
          </p>
          <p>
            At the project, I was responsible for new features development,
            sprint goals accomplish, sprint estimation, refactoring, code
            review, product quality, communication with the customer, and demo.
          </p>
          <h3>Watty AB</h3>
          <p>
            Lead Software Engineer <br />
            September 2015 &ndash; December 2017 <br />
            Stockholm, Sweden
          </p>
          <dl>
            <dt>
              <h4>Company Website</h4>
            </dt>
            <dd>
              <p>
                Worked on <strong>Company Website</strong>. On the project, I
                used <strong>SASS</strong>, <strong>React</strong>, and{' '}
                <strong>Redux</strong>. <strong>D3</strong> &mdash; Data-Driven
                Documents are used for any data visualizations. For API
                integration used native <strong>Fetch</strong>. The website is
                integrated with <strong>Stripe</strong> &mdash; payments
                infrastructure. As a code quality tool is used{' '}
                <strong>ESLint</strong>.
              </p>
            </dd>
            <dt>
              <h4>Watty &mdash; Android and iOS applications</h4>
            </dt>
            <dd>
              <p>
                Worked on <strong>Watty</strong> &mdash; Android and iOS
                applications. On the project, I used{' '}
                <strong>React Native</strong>. <strong>D3</strong> &mdash;
                Data-Driven Documents are used for any data visualizations.
              </p>
            </dd>
            <dt>
              <h4>Prototypes, promotional, and dev applications</h4>
            </dt>
            <dd>
              <p>
                Created about 10 dev applications to visualize the data with{' '}
                <strong>D3</strong> &mdash; Data-Driven Documents. Countless
                prototypes, and promotional{' '}
                <strong>Single Page Applications</strong>. Most of them were
                written with <strong>React</strong> and <strong>Redux</strong>,
                some of them on <strong>Angular</strong>. Mobile applications
                were written with <strong>React Native</strong>.
              </p>
            </dd>
          </dl>
          <p>
            As <strong>The Only One Front-end Developer in The Company</strong>{' '}
            was responsible for all the products.
          </p>
          <h3>C/MIND</h3>
          <p>
            Lead Software Engineer <br />
            September 2015 &ndash; December 2015 <br />
            Stockholm, Sweden
          </p>
          <p>
            Worked as <strong>Front-end Consultant</strong>. Was providing
            services to <strong>Watty AB</strong>. After the probation period,{' '}
            <strong>Watty AB</strong> hired me personally.
          </p>
          <h3>HiEnd Systems</h3>
          <p>
            Lead Software Engineer <br />
            January 2015 &ndash; August 2015 <br />
            Minsk, Belarus
          </p>
          <p>
            Worked on <strong>MoneyMan</strong> &mdash; the largest online
            alternative lending service, and 5 more similar products as a{' '}
            <strong>Front-end Developer</strong>. Products were written with{' '}
            <strong>SASS</strong>, <strong>Backbone</strong> and{' '}
            <strong>jQuery</strong>. The development team consists of 2 people
            located at the same place.
          </p>
          <p>
            At the project, I was responsible for new features development,
            sprint goals accomplish, sprint estimation, refactoring, code
            review, product quality.
          </p>
          <h3>Onestop Internet</h3>
          <p>
            Lead Software Engineer <br />
            March 2014 &ndash; August 2014 <br />
            Los Angeles County, California, United States
          </p>
          <p>
            Worked on <strong>E-commerce</strong> products as a{' '}
            <strong>Front-end Developer</strong>. Products were written with{' '}
            <strong>Knockout</strong> and <strong>jQuery</strong>. The
            development team consists of 5 people located at the same place.
          </p>
          <p>
            At the project, I was responsible for new features development,
            sprint goals accomplish, sprint estimation, product quality.
          </p>
          <h3>Startup Labs</h3>
          <p>
            Lead Software Engineer <br />
            August 2012 &ndash; September 2013 <br />
            Minsk, Belarus
          </p>
          <p>
            Worked on <strong>Fintech</strong> products as a{' '}
            <strong>Front-end Lead</strong>. Products were written with{' '}
            <strong>SASS</strong> and <strong>jQuery</strong>. The development
            team consists of 13 people located at the same place.
          </p>
          <p>
            At the project, I was responsible for sprint goals accomplish,
            sprint estimation, code review, product quality.
          </p>
          <h3>EPAM Systems</h3>
          <p>
            Software Engineer <br />
            March 2011 &ndash; August 2012 <br />
            Minsk, Belarus
          </p>
          <dl>
            <dt>
              <h4>Viacom</h4>
            </dt>
            <dd>
              <p>
                Worked on <strong>MTV Game Trailers</strong>,{' '}
                <strong>MTV Comedy Central</strong>,{' '}
                <strong>MTV The Daily Show</strong>, and{' '}
                <strong>MTV SPIKE</strong> for <strong>Viacom</strong> as a{' '}
                <strong>Front-end Developer</strong>. Products were written with{' '}
                <strong>SASS</strong> and <strong>jQuery</strong>. The
                development team consists of 5 people located at the same place.
              </p>
              <p>
                At the projects, I was responsible for sprint goals accomplish,
                sprint estimation, code review, product quality.
              </p>
            </dd>
            <dt>
              <h4>IMAX</h4>
            </dt>
            <dd>
              <p>
                Worked on <strong>Smart TV</strong> application for{' '}
                <strong>IMAX</strong> as a <strong>Front-end Developer</strong>.
                The product was written with <strong>JS</strong>. The
                development team consists of 2 people located at the same place.
              </p>
              <p>
                At the project, I was responsible for sprint goals accomplish,
                sprint estimation, product quality.
              </p>
            </dd>
          </dl>
          <h3>Dmitri Borovoy design studio</h3>
          <p>
            Software Engineer <br />
            April 2010 &ndash; October 2010 <br />
            Minsk, Belarus
          </p>
          <p>
            Worked on countless <strong>Design Studio</strong> quality products
            as a <strong>Front-end Developer</strong>. Products were written
            with <strong>SASS</strong> and <strong>jQuery</strong>.
          </p>
          <p>
            At the project, I was responsible for sprint goals accomplish,
            sprint estimation, product quality.
          </p>
          <h3>Freelance</h3>
          <p>
            September 2014 &ndash; January 2015 <br />
            September 2013 &ndash; March 2014 <br />
            October 2010 &ndash; March 2011 <br />
            June 2005 &ndash; April 2010
          </p>
        </section>
        <section>
          <h2>Education</h2>
          <h3>Belarusian National Technical University</h3>
          <p>Minsk, Belarus</p>
          <p>
            Information Technologies and Robotics <br />
            Master of Science in Information Technologies Software, Software
            Engineer
          </p>
        </section>
      </article>
    </main>
  );
}

export default HomePage;
