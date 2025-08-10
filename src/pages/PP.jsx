import React from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";

function PP() {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <PageHeader title="Privacy Policy"></PageHeader>
      <div className="relative w-[85%] mx-auto p-6 my-10 bg-base-300 rounded-lg shadow space-y-6">
        <section>
          <h1>Privacy Policy</h1>
          <p class="meta">
            <strong>Last updated:</strong>{" "}
            <time datetime="2025-08-10">10-08-2025</time>
          </p>
          <p>
            At <strong>SpeakIT</strong> (“we,” “our,” or “us”), we
            respect your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            protect your information when you use our website (
            <a href="https://alazadheera-assignment-11.netlify.app/">SpeakIT</a>).
          </p>
        </section>
        <section id="information-we-collect">
          <h2>1. Information We Collect</h2>
          <p>We may collect:</p>
          <ul>
            <li>
              <strong>Personal Information</strong> you provide (such as your
              name, email address, or phone number) when you fill out forms,
              create an account, or contact us.
            </li>
            <li>
              <strong>Non-Personal Information</strong> such as browser type, IP
              address, and pages visited, collected automatically through
              cookies and similar technologies.
            </li>
          </ul>
        </section>

        <section id="how-we-use">
          <h2>2. How We Use Your Information</h2>
          <p>We may use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services.</li>
            <li>Respond to your questions and requests.</li>
            <li>
              Send you updates, promotions, or other information (if you have
              opted in).
            </li>
            <li>Analyze website usage to improve user experience.</li>
            <li>Prevent fraudulent activity and maintain website security.</li>
          </ul>
        </section>

        <section id="cookies">
          <h2>3. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience.
            Cookies are small text files stored on your device. You can disable
            cookies in your browser settings, but some features of the site may
            not work properly.
          </p>
        </section>

        <section id="sharing">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal information. We may share it
            only:
          </p>
          <ul>
            <li>
              With service providers who help us operate our website and
              services.
            </li>
            <li>If required by law or to protect our legal rights.</li>
            <li>
              In connection with a business transfer (e.g., merger or sale).
            </li>
          </ul>
        </section>

        <section id="security">
          <h2>5. Data Security</h2>
          <p>
            We take reasonable steps to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no method of online transmission or storage is 100% secure.
          </p>
        </section>

        <section id="third-party-links">
          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those websites.
          </p>
        </section>

        <section id="your-rights">
          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your
            personal data, including the right to access, correct, or delete it.
            You can contact us to exercise these rights.
          </p>
        </section>

        <section id="changes">
          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated "Last updated" date.
          </p>
        </section>

        <section id="contact">
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <address>
            Email:{" "}
            <a href="mailto:alazadheera@gmail.com">
              alazadheera@gmail.com
            </a>
            <br />
            Address: Dhaka, Bangladesh.
          </address>
        </section>
      </div>
    </div>
  );
}

export default PP;
