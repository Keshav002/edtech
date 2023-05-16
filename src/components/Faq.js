import React from "react";
import "./Faq.css";
function Faq() {
  return (
    <div class="faq-container">
      <div class="faq">
        <h1>Frequently Asked Questions</h1>
        <div class="faq-question">
          <h2>How do I enroll in a course?</h2>
          <div class="faq-answer">
            <p>
              To enroll in a course, click on the course you're interested in
              and follow the instructions on the enrollment page. You'll need to
              create an account or sign in to an existing account to complete
              the enrollment process.
            </p>
          </div>
        </div>
        <div class="faq-question">
          <h2>How do I access my course materials?</h2>
          <div class="faq-answer">
            <p>
              Once you're enrolled in a course, you'll be able to access your
              course materials through your account dashboard. Simply log in to
              your account and click on the course you want to access. You'll be
              able to view your course materials and track your progress.
            </p>
          </div>
        </div>
        <div class="faq-question">
          <h2>Can I get a refund if I'm not satisfied with a course?</h2>
          <div class="faq-answer">
            <p>
              Yes, we offer a 30-day money-back guarantee for all of our
              courses. If you're not satisfied with a course, simply contact us
              within 30 days of your enrollment and we'll issue a full refund.
            </p>
          </div>
        </div>
        <div class="faq-question">
          <h2>Do you offer any discounts or promotions?</h2>
          <div class="faq-answer">
            <p>
              Yes, we periodically offer discounts and promotions on our
              courses. Be sure to sign up for our newsletter and follow us on
              social media to stay up-to-date on our latest promotions.
            </p>
          </div>
        </div>
        <div class="faq-question">
          <h2>Can I access the course materials anytime?</h2>
          <div class="faq-answer">
            <p>
              Yes, once you enroll in the course, you will have lifetime access
              to all the course materials and updates.
            </p>
          </div>
        </div>
        <div class="faq-question">
          <h2>What happens if I have questions during the course?</h2>
          <div class="faq-answer">
            <p>
              You can contact the instructor or ask questions in the course
              discussion forum. The instructor and the community will be happy
              to help you with your questions.
            </p>
          </div>
        </div>
        <div class="faq-question">
          <h2>Is there a certificate of completion?</h2>
          <div class="faq-answer">
            <p>
              Yes, you will receive a certificate of completion once you finish
              the course and pass the final exam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
