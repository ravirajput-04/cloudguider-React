import Cookies from "../components/Cookies"

function PrivacyPolicy() {
  return (
    <>
      <section className="privacy-container">
        <div className="privacy-wrapper">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-intro">
            At CloudGuider, we respect your privacy and are committed to protecting your personal information.
            This policy outlines how we collect, use, and safeguard your data when you use our cloud and DevOps services.
            By using our services, you agree to the practices described in this Privacy Policy.
          </p>
          <div className="privacy-section">
            <h2 className="privacy-heading">1. Information We Collect</h2>
            <p className="privacy-text">
              We collect personal information such as your name, email address, phone number, and company details when you interact with our services or sign up for an account.
              Additionally, we gather technical information including IP addresses, browser types, operating systems, device identifiers, and usage patterns.
              This information helps us optimize our platform, provide personalized experiences, and troubleshoot technical issues.
              In certain cases, we may also collect payment information, billing addresses, and other details necessary to process transactions securely.
              Cookies and similar tracking technologies may be used to improve your experience on our website and to understand user behavior.
            </p>
          </div>
          <div className="privacy-section">
            <h2 className="privacy-heading">2. How We Use Your Information</h2>
            <p className="privacy-text">
              Your information is used primarily to provide, maintain, and enhance our services.
              We use the data to deliver the cloud and DevOps services you request, personalize your experience, improve the usability of our platform, communicate important updates, service announcements, and promotional offers, perform analytics to monitor and enhance performance, security, and service reliability, and comply with legal obligations and enforce our agreements.
            </p>
          </div>
          <div className="privacy-section">
            <h2 className="privacy-heading">3. Data Security</h2>
            <p className="privacy-text">
              Protecting your data is a top priority. We employ industry-standard security measures, including end-to-end encryption for data transmission and storage, strict access controls ensuring only authorized personnel can access sensitive information, regular security audits and vulnerability assessments, and continuous monitoring of systems to detect and prevent unauthorized access.
              While we take extensive precautions to secure your information, no system can be guaranteed to be completely secure.
              We encourage users to take personal measures such as strong passwords and two-factor authentication.
            </p>
          </div>
          <div className="privacy-section">
            <h2 className="privacy-heading">4. Sharing of Information</h2>
            <p className="privacy-text">
              We do not sell, rent, or trade your personal data to third parties.
              Information may be shared with trusted service providers who assist us in delivering our services under strict confidentiality agreements, to comply with legal obligations such as responding to lawful requests from public authorities, or in connection with business transfers, mergers, or acquisitions where the receiving entity agrees to uphold privacy standards.
              We take reasonable steps to ensure that any third party receiving your information provides adequate protection consistent with this Privacy Policy.
            </p>
          </div>
          <div className="privacy-section">
            <h2 className="privacy-heading">5. Your Rights</h2>
            <p className="privacy-text">
              You have certain rights regarding your personal information, including the right to access your data, correct inaccurate or incomplete information, request deletion of your personal data where permitted by law, object to the processing of your personal information for specific purposes such as marketing, and receive your data in a structured, commonly used format.
              To exercise these rights, please contact us at <a href="mailto:support@cloudguider.com">support@cloudguider.com</a>.
              We will respond promptly and in accordance with applicable data protection laws.
            </p>
          </div>
          <div className="privacy-section">
            <h2 className="privacy-heading">6. Updates to Policy</h2>
            <p className="privacy-text">
              Our Privacy Policy may be updated from time to time to reflect changes in our practices, technology, or legal requirements.
              When significant updates occur, we will notify you via email or a prominent notice on our website.
              We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your information.
              Your continued use of our services constitutes acceptance of any changes to this policy.
            </p>
          </div>
          <p className="privacy-footer-text">
            If you have any questions about our Privacy Policy or practices, please contact us at <a href="mailto:connect@cloudguider.com">connect@cloudguider.com</a>.
          </p>
        </div>
      </section>
      <Cookies />

    </>
  )
}

export default PrivacyPolicy