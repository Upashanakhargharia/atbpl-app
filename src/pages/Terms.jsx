import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />

      <section className="privacy-policy-page">
        <div className="privacy-policy-container">
          <div className="privacy-policy-header">
            <h1>Terms & Conditions</h1>
            <p>
              ATBPL – Andhra Tennis Ball Premier League
            </p>
            <p>
              Official Terms & Conditions (Read Carefully)
            </p>
          </div>

          <div className="privacy-policy-content">
            <div className="privacy-policy-block">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By using this website or registering, you agree to the Terms. If
                not, do not participate.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>2. Eligibility & Registration</h2>
              <p>
                <strong>Age Requirement:</strong> Minimum 14 years.
              </p>
              <p>
                <strong>ID Proof:</strong> Must show Aadhaar or valid DOB proof
                at Yellow Ticket Trials.
              </p>
              <p>
                <strong>Correct Information:</strong> Any wrong details =
                disqualification without refund.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>3. Registration Fee & Refund Policy</h2>
              <p>
                <strong>₹699 + GST = ₹825 Final Payable</strong> (Regular
                Registration)
              </p>
              <p>
                Fee is <strong>100% non-refundable.</strong>
              </p>
              <p>
                <strong>Payments:</strong> UPI, GPay, Cards, Net Banking.
              </p>
              <p>
                <strong>Event Cancellation:</strong> If cancelled before trials
                start, partial/full refund possible.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>4. Trial Rules & Participation</h2>
              <p>
                <strong>Venue:</strong> Nearest Mandal will be allotted and
                informed through email.
              </p>
              <p>
                <strong>Reporting:</strong> Reach 25 minutes before your slot.
              </p>

              <p><strong>Trial Format:</strong></p>
              <ul>
                <li>Batting – 2 overs</li>
                <li>Bowling – 1 over</li>
              </ul>

              <p><strong>Equipment:</strong></p>
              <ul>
                <li>Sports dress compulsory</li>
                <li>Bring your own kit</li>
                <li>Fiber bat not allowed</li>
                <li>Balls will be provided</li>
              </ul>

              <p>
                <strong>Expenses:</strong> Travel, food, accommodation are your
                own responsibility.
              </p>
              <p>
                <strong>Substance Use:</strong> Alcohol/drugs will result in
                life-time ban.
              </p>
              <p>
                <strong>Minimum Registration Policy:</strong> If registrations
                in any city do not reach a minimum of 30 participants, trials
                will not be conducted in that city. In such cases, trials will
                be conducted at the respective district-level venue. Registered
                players must attend the district trials. No refund or
                compensation will be provided for this change.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>5. Safety & Liability</h2>
              <p>
                ATBPL is not responsible for theft, loss, damage, or injuries.
                First-aid will be available.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>6. Selection & Communication</h2>
              <p>
                <strong>Final Decision:</strong> Binding and non-negotiable.
              </p>
              <p>
                <strong>Communication:</strong> Selection updates through Email
                & WhatsApp.
              </p>
              <p>
                <strong>Franchise:</strong> Top 180 players will sign franchise
                agreements.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>7. Intellectual Property</h2>
              <p>
                All logos, videos, graphics belong to ATBPL. Unauthorized usage
                not allowed.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>8. Prohibited Actions</h2>
              <p>
                No hacking, illegal activities, or harmful posting on website.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>9. Termination</h2>
              <p>
                Organizers can remove a participant anytime if terms are
                violated.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>10. Organizer Rights</h2>
              <p>
                Dates, venues, trial formats may change due to technical/natural
                reasons.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>11. Support</h2>
              <p>
                Contact ATBPL help email/helpline for any issues.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>12. Legal Jurisdiction</h2>
              <p>
                All disputes under Kakinada District Court, Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}