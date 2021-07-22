import Head from 'next/head';

import { NAME } from '../constants';

import styles from '../styles/home.module.scss';

function HomePage() {
  return (
    <main className={styles.root}>
      <Head>
        <title>{NAME}</title>
      </Head>
      <article>
        <h1>{NAME}</h1>
        <section>
          <h2>Contacts</h2>
          <ul>
            <li>
              Email:{' '}
              <a href="mailto:denis.shvets.a+gh.pages@gmail.com">
                denis.shvets.a+gh.pages@gmail.com
              </a>
            </li>
            <li>
              Linkedin:{' '}
              <a
                href="https://www.linkedin.com/in/denisshvets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                denisshvets
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Career Summary</h2>
          <p>
            Front-end developer with production experience in software
            development. Experienced in building responsive web and mobile
            applications which are used by customers throughout the world.
            Immersed in the latest and coolest technologies.
          </p>
        </section>
        <section>
          <h2>Summary of Qualifications</h2>
          <ul>
            <li>
              <strong>HTML</strong>, <strong>CSS</strong> and JavaScript
            </li>
            <li>
              <strong>SASS</strong>, LESS and PostCSS
            </li>
            <li>
              <strong>Reaсt</strong>, <strong>Next.js</strong>, React Native,
              Redux, <strong>Lodash</strong>, jQuery, Apollo, Angular, Vue,
              Electron, GSAP, <strong>D3</strong>, three.js, Knockout, Kinetic,
              Autobahn, Socket.io, Backbone, Underscore, Ember and RequireJS
            </li>
            <li>
              <strong>BEM</strong>, SMACSS, ACSS, OOCSS, SPA, Parallax,{' '}
              <strong>Responsive Web Design</strong> and Compatibility with
              modern and legacy browsers
            </li>
            <li>
              Semantics, Connectivity(Web Sockets), Offline & Storage(Storage
              and FileReader), 2D/3D Graphics & Effects(SVG and Canvas),
              Performance & Integration(History API, Drag and Drop, Animation,
              Fullscreen API) and Styling
            </li>
            <li>Node.js, PHP, Python and Java</li>
            <li>
              <strong>Webpack</strong>, Docker, <strong>npm</strong>,{' '}
              <strong>yarn</strong>, GraphQL, Gulp, Grunt, PuTTY, Virtual Box,
              Bower, Bootstrap, Foundation and Yeoman
            </li>
            <li>
              <strong>JIRA</strong>, <strong>Confluence</strong>,{' '}
              <strong>GitHub</strong>, CircleCI, Stash and Crucible
            </li>
            <li>
              <strong>Git</strong>, SVN and Perforce
            </li>
            <li>WordPress, Orchard, Drupal and different custom builds</li>
            <li>Mongo, PostgreSQL, Oracle and MySQL</li>
            <li>
              <strong>Photoshop</strong>, <strong>Illustrator</strong>,{' '}
              <strong>Sketch</strong> and AfterEffects
            </li>
            <li>
              Cypress, Sentry, various linters, <strong>Jest</strong> and{' '}
              <strong>react-testing-library</strong>
            </li>
            <li>
              Nunjucks, Mustache, Thymeleaf, HAML, Jade/Pug, Twig, Smarty and
              Jekyll
            </li>
          </ul>
        </section>
        <section>
          <h2>Career History</h2>
          <h3>Globant LLC, Minsk, Belarus</h3>
          <p>
            Front-end developer <br />
            August 2018
          </p>
          <p>
            Worked on <strong>StartWire</strong> job search web application.
            (React, TypeScript)
          </p>
          <p>Following tasks were performed:</p>
          <ul>
            <li>Migration from Angular v1 to React with TypeScript;</li>
            <li>New features development;</li>
            <li>Code quality tools integration.</li>
          </ul>
          <p>Responsibilities:</p>
          <ul>
            <li>Front-end development;</li>
            <li>Code review;</li>
            <li>Work planning;</li>
            <li>Customer communications.</li>
          </ul>
          <p>
            Worked on <strong>Stargate</strong> support web application. (React,
            TypeScript)
          </p>
          <p>Following tasks were performed:</p>
          <ul>
            <li>New features development;</li>
            <li>Code quality tools integration;</li>
            <li>Refactoring.</li>
          </ul>
          <p>Responsibilities:</p>
          <ul>
            <li>Team lead;</li>
            <li>Front-end development;</li>
            <li>Work planning;</li>
            <li>Customer communications.</li>
          </ul>
          <p>
            Worked on <strong>Mediatonic Player Portal</strong>. (React,
            Next.js, TypeScript)
          </p>
          <p>Following tasks were performed:</p>
          <ul>
            <li>Architecture development;</li>
            <li>New features development.</li>
          </ul>
          <p>Responsibilities:</p>
          <ul>
            <li>Front-end lead;</li>
            <li>Front-end development;</li>
            <li>Work planning;</li>
            <li>Customer communications.</li>
          </ul>
          <h3>Sivintech, Minsk, Belarus</h3>
          <p>
            Front-end developer, Team lead <br />
            April 2018 — August 2018
          </p>
          <p>Worked on education CRM for State University of New York.</p>
          <p>Responsibilities:</p>
          <ul>
            <li>Team management;</li>
            <li>Front-end development;</li>
            <li>Back - end development;</li>
            <li>Code review;</li>
            <li>Work planning;</li>
            <li>Mentoring;</li>
            <li>Customer communications.</li>
          </ul>
          <h3>Besk, Minsk, Belarus</h3>
          <p>
            Front-end developer, Team lead <br />
            April 2018 - August 2018
          </p>
          <p>
            Worked on Bankera, CoinSupply and Socium Trade crypto currency
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
          <h3>Watty AB, Stockholm, Sweden</h3>
          <p>
            Front-end developer
            <br />
            September 2015 — December 2017
          </p>
          <p>Following tasks were performed:</p>
          <ul>
            <li>Developed from scratch corporate website;</li>
            <li>
              Developed from scratch iOS and Android applications for main
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
          <h3>HiEnd Systems, Minsk, Belarus</h3>
          <p>
            Front-end developer, Team lead
            <br />
            January 2015 — August 2015
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
          <h3>Onestop Internet, Los Angeles, USA</h3>
          <p>
            Front-end developer
            <br />
            March 2014 — August 2014
          </p>
          <p>Worked on Front-end related tasks.</p>
          <h3>Startup Labs, Minsk, Belarus</h3>
          <p>
            Front-end developer, Team lead
            <br />
            August 2012 — September 2013
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
              Created universal template which increased feature implementation
              speed and speed up release cycle;
            </li>
            <li>
              Created core admin template for all projects that reduced support
              effort;
            </li>
            <li>Made decisions on technologies to use;</li>
            <li>Setup processes in front-end department;</li>
            <li>Added Code Review into process;</li>
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
          <h3>EPAM Systems, Minsk, Belarus</h3>
          <p>
            Front-end developer, Team lead
            <br />
            March 2011 — August 2012
          </p>
          <p>Following tasks were performed:</p>
          <ul>
            <li>Participated in replatforming phase;</li>
            <li>Integrated with FLUX, Facebook, Twitter;</li>
            <li>Developed reusable web components;</li>
            <li>Added Responsive Web Design to projects;</li>
            <li>Optimized static content;</li>
            <li>Added Code Review into process;</li>
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
          <h3>Dmitri Borovoy design studio, Minsk, Belarus</h3>
          <p>
            Front-end developer
            <br />
            April 2010 — October 2010
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
            Front-end developer
            <br />
            September 2014 — January 2015
            <br />
            September 2013 — March 2014
            <br />
            June 2005 — February 2011
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
          <h3>BELARUSIAN NATIONAL TECHNICAL UNIVERSITY, MINSK, BELARUS</h3>
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
