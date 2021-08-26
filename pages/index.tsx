import Head from 'next/head';

import { NAME } from '../constants';

import styles from '../styles/home.module.scss';

function HomePage() {
  return (
    <main className={styles.root}>
      <Head>
        <title>{NAME}</title>
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
                <strong>SLiC</strong> as a <strong>Technical Leader</strong>. On
                the project, we use the modern architecture{' '}
                <strong>Jamstack</strong>. <strong>Yarn workspaces</strong> to
                organize the applications and shared components.{' '}
                <strong>Next.js</strong> as core framework with{' '}
                <strong>React</strong> and <strong>TypeScript</strong> under the
                hood. For forms used the proven <strong>React Hook Form</strong>
                . For API integration used <strong>SWR</strong> &mdash; React
                Hooks for Data Fetching. The applications integrated with{' '}
                <strong>Strapi</strong> &mdash; headless CMS and{' '}
                <strong>Stripe</strong> &mdash; payments infrastructure. The
                unit and integration tests used the <strong>Jest</strong> and{' '}
                <strong>React Testing Library</strong>. E2E tests used{' '}
                <strong>Cypress</strong>. As code quality tools are used{' '}
                <strong>ESLint</strong> and <strong>Prettier</strong>. The
                development team consists of 7 people located in 5 different
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
                <strong>Front-end Leader</strong>. On the project, we used the
                modern architecture <strong>Jamstack</strong>.{' '}
                <strong>Next.js</strong> as core framework with{' '}
                <strong>React</strong> and <strong>TypeScript</strong> under the
                hood. For forms used the proven <strong>React Hook Form</strong>
                . For API integration used <strong>SWR</strong> &mdash; React
                Hooks for Data Fetching. The unit and integration tests used the{' '}
                <strong>Jest</strong> and <strong>React Testing Library</strong>
                . E2E tests used <strong>Cypress</strong>. As code quality tools
                are used <strong>ESLint</strong> and <strong>Prettier</strong>.
                The development team consists of 3 people located at the same
                place.
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
                <strong>Front-end Leader</strong>. It was an old company project
                where our goal was to develop new features, integrate quality
                tools, and make refactoring. On the project, we used{' '}
                <strong>React</strong> with <strong>TypeScript</strong>. For API
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
                make refactoring. On the project, we used <strong>React</strong>{' '}
                with <strong>TypeScript</strong>. For API integration used
                native <strong>Fetch</strong>. As code quality tools are used{' '}
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
          <p>Worked on education CRM for the State University of New York.</p>
          <p>Responsibilities:</p>
          <ul>
            <li>Team management;</li>
            <li>Front-end development;</li>
            <li>Back-end development;</li>
            <li>Code review;</li>
            <li>Work planning;</li>
            <li>Mentoring;</li>
            <li>Customer communications.</li>
          </ul>
          <h3>Besk</h3>
          <p>
            Lead Software Engineer <br />
            January 2018 &ndash; April 2018 <br />
            Minsk, Belarus
          </p>
          <p>
            Worked on Bankera, CoinSupply, and Socium Trade cryptocurrency
            exchange web applications.
          </p>
          <p>Responsibilities:</p>
          <ul>
            <li>Team management;</li>
            <li>Front-end development;</li>
            <li>Code review;</li>
            <li>Work planning;</li>
            <li>Mentoring;</li>
            <li>Customer communication.</li>
          </ul>
          <h3>Watty AB</h3>
          <p>
            Lead Software Engineer <br />
            September 2015 &ndash; December 2017 <br />
            Stockholm, Sweden
          </p>
          <p>Following tasks were performed:</p>
          <ul>
            <li>Developed from the scratch corporate website;</li>
            <li>
              Developed from scratch iOS and Android applications for the main
              product;
            </li>
            <li>
              Developed about 10 internal projects to help other teams improve
              productivity;
            </li>
            <li>
              Integrated billing and support systems after product release;
            </li>
            <li>Worked on Front-end related tasks.</li>
          </ul>
          <h3>C/MIND</h3>
          <p>
            Lead Software Engineer <br />
            September 2015 &ndash; December 2015 <br />
            Stockholm, Sweden
          </p>
          <p>Worked on Front-end related tasks.</p>
          <h3>HiEnd Systems</h3>
          <p>
            Lead Software Engineer <br />
            January 2015 &ndash; August 2015 <br />
            Minsk, Belarus
          </p>
          <p>Worked on Front-end related tasks.</p>
          <p>Projects:</p>
          <ul>
            <li>
              MoneyMan — First and largest online Microfinance organization in
              Russia, Kazakhstan, Spain and Georgia (http://moneyman.ru/);
            </li>
            <li>5 more familiar to MoneyMan projects.</li>
          </ul>
          <h3>Onestop Internet</h3>
          <p>
            Lead Software Engineer <br />
            March 2014 &ndash; August 2014 <br />
            Los Angeles County, California, United States
          </p>
          <p>Worked on Front-end related tasks.</p>
          <h3>Startup Labs</h3>
          <p>
            Lead Software Engineer <br />
            August 2012 &ndash; September 2013 <br />
            Minsk, Belarus
          </p>
          <p>Following tasks were performed:</p>
          <ul>
            <li>Processes automation;</li>
            <li>Added SASS support to all projects in the company;</li>
            <li>
              Developed reusable complex responsive web components like RWD
              forms, carousels, etc;
            </li>
            <li>
              Participated in all phases of the software development cycle: from
              product definition and design through implementation, debugging,
              and testing;
            </li>
            <li>
              Was created a universal template which increased feature
              implementation speed and speeds up release cycle;
            </li>
            <li>
              Created core admin template for all projects that reduced support
              effort;
            </li>
            <li>Made decisions on technologies to use;</li>
            <li>Setup processes in front-end department;</li>
            <li>Added Code Review into the process;</li>
            <li>Task distribution in the department;</li>
            <li>Presentations about technologies for department;</li>
            <li>Interviewed candidates;</li>
            <li>Worked on Front-end related tasks.</li>
          </ul>
          <p>Projects:</p>
          <ul>
            <li>
              Yosto Control Panel and Landing Page — Private lead generation
              affiliate network;
            </li>
            <li>
              Clicketta Control Panel, Landing Page and Clicketta Module — Next
              Generation Ad Marketplace;
            </li>
            <li>
              Agentera Control Panel, Landing Page and Agentera Module —
              Automated intellectual support system;
            </li>
            <li>
              Weberra Control Panel and Landing Page — Lead Generation Sites
              Builder.
            </li>
            <li>
              Short term loan lenders who can provide you with access to the
              emergency funds you need, regardless of the reason:
            </li>
            <li>Loan Up (https://loanup.com/);</li>
            <li>21 more similar projects.</li>
          </ul>
          <h3>EPAM Systems</h3>
          <p>
            Software Engineer <br />
            March 2011 &ndash; August 2012 <br />
            Minsk, Belarus
          </p>
          <p>Following tasks were performed:</p>
          <ul>
            <li>Participated in re-platforming phase;</li>
            <li>Integrated with FLUX, Facebook, Twitter;</li>
            <li>Developed reusable web components;</li>
            <li>Added Responsive Web Design to projects;</li>
            <li>Optimized static content;</li>
            <li>Added Code Review into the process;</li>
            <li>Presented technical demos to the customer;</li>
            <li>Worked on Front-end related tasks.</li>
          </ul>
          <p>Projects:</p>
          <ul>
            <li>
              <p>MTV / Viacom:</p>
              <ul>
                <li>GameTrailers — Game Portal;</li>
                <li>
                  Comedy Central — News Portal (http://www.comedycentral.com/);
                </li>
                <li>
                  The Daily Show — News Portal (http://www.thedailyshow.com/);
                </li>
                <li>SPIKE — News Portal (http://www.spike.com/).</li>
              </ul>
            </li>
            <li>
              <p>IMAX:</p>
              <ul>
                <li>IMAX - SITE(https://www.imax.com/).</li>
              </ul>
            </li>
          </ul>
          <h3>Dmitri Borovoy design studio</h3>
          <p>
            Software Engineer <br />
            April 2010 &ndash; October 2010 <br />
            Minsk, Belarus
          </p>
          <p>Following tasks were performed:</p>
          <ul>
            <li>
              Worked on projects that took grand prizes on Golden Web 2010
              (Russian Web Contest);
            </li>
            <li>Worked on Front-end related tasks.</li>
          </ul>
          <h3>Freelance</h3>
          <p>
            Front-end Developer <br />
            September 2014 &ndash; January 2015 <br />
            September 2013 &ndash; March 2014 <br />
            October 2010 &ndash; March 2011 <br />
            June 2005 &ndash; April 2010
          </p>
          <p>Worked on Front-end related tasks.</p>
          <p>Projects:</p>
          <ul>
            <li>
              Atlant Telecom Corporate Site — Largest ISP in Belarus
              (https://internet.velcom.by/);
            </li>
            <li>
              Red Graphic Corporate Site — Interactive Agency
              (http://redgraphic.com/);
            </li>
            <li>
              Public Group Promo Site — Branding Company (http://pgr.by/);
            </li>
            <li>
              World of Tanks Game Portal modules — Team-based massively
              multiplayer online action game (http://worldoftanks.ru/).
            </li>
          </ul>
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
