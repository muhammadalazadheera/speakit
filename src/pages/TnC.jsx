import React from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";

function TnC() {
  return (
    <div>
      <Helmet>
        <title>Terms And Condition</title>
      </Helmet>
      <PageHeader title="Terms And Condition"></PageHeader>
      <div className="relative w-[85%] mx-auto p-6 my-10 bg-base-300 rounded-lg shadow space-y-6">
        <section className="">
          <h1>Terms &amp; Conditions</h1>
          <p class="meta">
            <strong>Last updated:</strong>{" "}
            <time datetime="[2025-08-10]">10-08-2025</time>
          </p>
          <p>
            Welcome to <strong>SpeakIT</strong> ("we", "us", or
            "our"). By accessing or using{" "}
            <a href="https://alazadheera-assignment-11.netlify.app/">SpeakIT</a>, you agree to
            be bound by these Terms &amp; Conditions. If you do not agree,
            please do not use the site.
          </p>
        </section>
        <section id="use">
          <h2>1. Use of Our Website</h2>
          <p>
            You must be at least 13 years old to use our website. You agree to
            use the website for lawful purposes only and in a way that does not
            infringe the rights of others. You must not attempt to disrupt,
            hack, or misuse the website or its services.
          </p>
        </section>

        <section id="ip">
          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website — including text, images, logos,
            graphics, and software — is owned by us or our licensors. You may
            not copy, reproduce, distribute, modify, or create derivative works
            from our content without our prior written permission.
          </p>
        </section>

        <section id="user-content">
          <h2>3. User Content</h2>
          <p>
            If you submit content (comments, reviews, uploads, etc.), you grant
            us a non-exclusive, worldwide, royalty-free, transferable license to
            use, reproduce, adapt, publish, translate, and display that content
            in connection with the website. You are solely responsible for
            content you submit and must not post anything illegal, defamatory,
            harmful, or infringing.
          </p>
        </section>

        <section id="third-party">
          <h2>4. Third-Party Links</h2>
          <p>
            The site may contain links to third-party websites that we do not
            control. We are not responsible for the content, privacy practices,
            or availability of those external sites. Inclusion of links does not
            imply endorsement.
          </p>
        </section>

        <section id="disclaimer">
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The website is provided "as is" and "as available" without
            warranties of any kind. We do not warrant that the site will be
            error-free, secure, or uninterrupted.
          </p>
        </section>

        <section id="liability">
          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any
            direct, indirect, incidental, consequential, or punitive damages
            arising from your use of (or inability to use) the website.
          </p>
        </section>

        <section id="privacy">
          <h2>7. Privacy</h2>
          <p>
            Your use of the website is also governed by our{" "}
            <a href="[privacy-policy-url]">Privacy Policy</a>, which explains
            how we collect, use, and protect your personal data.
          </p>
        </section>

        <section id="changes">
          <h2>8. Changes to These Terms</h2>
          <p>
            We may update these Terms at any time. Updated Terms will be posted
            on this page with a new "Last updated" date. Continuing to use the
            website after changes means you accept the updated Terms.
          </p>
        </section>

        <section id="contact">
          <h2>9. Contact Us</h2>
          <p>If you have questions about these Terms, please contact us:</p>
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

export default TnC;
