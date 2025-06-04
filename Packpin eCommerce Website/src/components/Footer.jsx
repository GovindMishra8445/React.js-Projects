import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const policies = {
  "Privacy Policy": `<strong>Privacy Policy for PackPin</strong> <p>At PackPin (owned by Doolky India Pvt Ltd), we are committed to safeguarding your privacy. This policy explains how we collect, use, disclose, and protect your personal information in compliance with the Information Technology Act, 2000, IT Rules, 2011, and other applicable Indian laws.</p></br>
   <ul>
        <li><strong>1. Information We Collect</strong></li>
        <li>We collect the following information to fulfill orders and enhance your experience:</li>
        <li><strong>•	Personal Data:</strong> Name, email, phone number, shipping address, payment details.</li>
        <li><strong>•	Usage Data:</strong> IP address, browser type, cookies, and browsing behavior.</li>
        <li><strong>•	Transactional Data:</strong> Order history, payment method, and purchase preferences.</li>
      </ul>
      </br>
   <ul>
        <li><strong>2. How We Use Your Information</strong></li>
        <li>Your data helps us:</li>
        <li>•	Process orders, manage accounts, and deliver products.</li>
        <li>•	Personalize your shopping experience and improve our services.</li>
        <li>•	Communicate updates, offers, and promotions (with your consent).</li>
        <li>•	Conduct internal analysis, audits, and comply with legal obligations.</li>
        <li><strong>We do not sell, rent, or trade your personal information to third parties.</strong></li>
      </ul>
      </br>
   <ul>
        <li><strong>3. Disclosure of Information</strong></li>
        <li>We may share your information:</li>
        <li>•	With trusted partners (e.g., logistics providers, payment gateways) <strong>strictly for order fulfillment.</strong></li>
        <li>•	In aggregated, non-identifiable form for marketing or research purposes.</li>
        <li><strong>•	When required by law,</strong> regulatory authorities, or to protect our rights, users, or property.</li>
      </ul>
      </br>
   <ul>
        <li><strong>4. Cookies</strong></li>
        <li>•	We use <strong>Cookies</strong> to recognize returning users, store cart items, and analyze site traffic.</li>
        <li>•	Cookies do not contain personal data. Disable them via your browser settings, but note this may limit site functionality.</li>
      </ul>
      </br>
   <ul>
        <li><strong>5. Security Measures</strong></li>
        <li><strong>•	Encryption: </strong>SSL technology secures transactions.</li>
        <li><strong>•	Access Control: </strong>Restricted access to personal data.</li>
        <li><strong>•	Account Protection: </strong>Passwords protect member accounts. Never share your password.</li>
        <li>Note: No internet transmission is 100% secure. Use our services at your discretion.</li>
        </ul>
      </br>
   <ul>
        <li><strong>6. Minors</strong></li>
        <li>•	Our platform is intended for users <strong> aged 18+ </strong> under the Indian Contract Act, 1872.</li>
        <li>•	We do not knowingly collect data from children under 18. If such data is shared, you confirm you have legal authority.</li>
      </ul>
      </br>
   <ul>
   <ul>
        <li><strong>7. Data Retention</strong></li>
        <li>•	We retain personal data <strong> only as long as necessary </strong> for order fulfillment, legal compliance, or fraud prevention.</li>
        <li>•	Anonymized data may be retained for research or analysis.</li>
      </ul>
      </br>
   <ul>
        <li><strong>8. Your Rights</strong></li>
        <li><strong>•	Access/Correct Data:</strong> Update your account details via your PackPin profile.</li>
        <li><strong>•	Opt Out:</strong> Unsubscribe from marketing emails using the link in </li>
        <li><strong>•	Delete Data:</strong> Request deletion by emailing [privacy@packpin.in].</li>
      </ul>
      </br>
   <ul>
        <li><strong>9. Policy Updates</strong></li>
        <li>•	Changes to this policy will be posted on our website with a revised "Last Updated" date.</li>
        <li>•	Continued use of our services implies acceptance of the updated policy.</li>
      </ul>
      </br>
   <ul>
        <li><strong>10. Grievance Officer</strong></li>
        <li>For privacy concerns, contact:</li>
        <li><strong>Email:</strong> [support@packpin.com ]</li>
      </ul>
      </br>
   <ul>`,

  "Terms and Conditions": `<p><strong>Copyright and Intellectual Property</strong> All content displayed, transmitted, or carried on <strong>PackPin</strong> is the property of <strong>Dollky India Pvt. Ltd.</strong> and is protected under copyright and other intellectual property laws. The website is designed, updated, and maintained independently by www.packpin.in. Users must not modify, publish, transmit, transfer, sell, reproduce, create derivative works from, distribute, perform, display, or commercially exploit any content from this website in any way without prior written permission from <strong>Dollky India Pvt. Ltd.</strong></p></br>
  <p><strong>Terms of Use - Disclaimer PackPin</strong>, operated by Dollky India Pvt. Ltd., reserves the right to modify, suspend, or cancel its services at any time if a computer virus, bug, or other technical issue compromises security or proper administration.</p></br>
  <p>We disclaim all warranties or conditions, whether expressed or implied, including but not limited to implied warranties or conditions of information accuracy and completeness. We consider ourselves subject only to the jurisdiction of the local courts. <strong>PackPin</strong> reserves the right to refuse service to anyone at any time and shall not be liable for any damage resulting from the use of its website.</p></br>
  <p>Privacy Policy At PackPin, we respect your privacy and are committed to safeguarding your personal information. We do not share your personal data with third parties except as required to fulfill the services you request. This includes notifying you of promotional offers and updates. You may choose to deactivate your account, but your information may remain archived in our records for compliance and legal purposes. <strong>PackPin</strong> may update this privacy policy periodically, and users are encouraged to review this page regularly.</p></br>
 
  <ul>
        <li><strong>What We Collect</strong> We may collect the following information:</li>
        <li>•	Name and job title</li>
        <li>•	Contact details including phone number and email address</li>
        <li>•	Demographic information such as location, preferences, and interests</li>
        <li>•	Other information relevant to customer surveys and offers</li>
      </ul>
  <p>Users have the right to refuse to provide certain information by opting out of specific services or features.</p></br>
  <p>We will not sell, distribute, or lease your personal information to third parties unless required by law or with your consent. We may use your personal details to share promotional information about third parties that we believe may interest you if you opt in. If any of your details are incorrect or incomplete, please contact us at <strong>sales@packpin.in,</strong> and we will promptly update them.</p></br>
  
  <p><strong>Privacy Policy </strong> Users agree to the <strong>PackPin</strong> Privacy Policy, available at <strong>www.packpin.in/privacy-policy.</strong> By using the website, users consent to the collection, storage, and usage of their personal information by <strong>PackPin</strong> and its affiliates.</p></br>
  <p> <strong>Cookies</strong> We use cookies to store user-specific information and track website visits. These data collection tools help analyze webpage functionality, promotional effectiveness, and improve user experience. Users may configure their browsers to accept, reject, or disable cookies, though disabling cookies may limit certain website features and require repeated data entry.</p></br>
  <p>For any queries related to our<strong>Terms and Conditions,</strong> please contact us at <strong>support@packpin.in.</strong> </p></br>
 `,

  "Agreement Policy": `<p>This document is an electronic record in terms of the Information Technology Act, 2000, and the applicable rules, as well as the amended provisions pertaining to electronic records under various statutes as updated by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require physical or digital signatures.</p></br>
  <p>This document is published in compliance with Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011, which mandates the publication of rules, regulations, privacy policy, and user agreements for the use of the website <strong>www.packpin.in</strong>.</p></br>
  <p>Your use of <strong>www.packpin.in</strong> and its services is governed by the following terms and conditions, along with any applicable policies incorporated herein by reference. By transacting on the website, you agree to adhere to the applicable policies and terms. By using the website, you are contracting with <strong>Dollky India Pvt. Ltd.</strong>, and these user agreements, including policies, constitute your binding obligations.</p></br>
  <p><strong>User Eligibility</strong> Usage of <strong>www.packpin.in</strong> is available only to individuals, firms, companies, corporations, government agencies, and legally recognized entities that can enter legally binding contracts under the <strong>Indian Contract Act, 1872.</strong> Individuals classified as "incompetent to contract" under the <strong>Indian Contract Act, 1872,</strong> such as un-discharged insolvents, are not eligible to use this website. Minors under 18 years may use the website only under the supervision and prior consent of a parent or legal guardian.</p></br>
  <p> <strong>Your Account and Registration Obligations</strong>Users must select a password while registering and are solely responsible for maintaining its confidentiality. Any unauthorized use of an account must be reported immediately to <strong>PackPin</strong>. <strong>PackPin</strong> is not liable for any loss resulting from unauthorized account usage. Users are prohibited from using another person’s account at any time.</p></br>
  <p><strong>Use of Website and Communication www.packpin.in</strong> is to be used solely for lawful purposes in accordance with Indian law. The user agrees not to disrupt the website’s functionality or interfere with its operations. Any information provided on the website during registration, purchasing, or feedback submission is the sole responsibility of the user. <strong>PackPin</strong> acts only as a conduit for online distribution and publication of user information.</p></br>
  <p><strong>Disclaimer</strong> Users access the website and transact at their own risk. <strong>PackPin</strong> is not responsible for any breach of conditions, representations, or warranties by third-party sellers. The company expressly disclaims any liability regarding third-party actions.</p></br>
  <p><strong>Content on the Website PackPin</strong> provides hosting services for registered users and businesses. All items and their contents are listed by users. The company does not initiate, modify, or transmit such content. Prices and product availability are subject to change without notice.</p></br>
  <ul>
        <li><strong>General Terms and Conditions</strong></li>
        <li>•	These terms and conditions supersede previous agreements.</li>
        <li>•	Prices are listed in Indian Rupees and may change without notice.</li>
        <li>•	<strong>PackPin</strong> reserves the right to accept or reject orders at its sole discretion.</li>
        <li>•	In cases of incorrect pricing, orders may be canceled and payments refunded.</li>
        <li>•	Users must provide correct and valid information while placing orders.</li>
        <li>•	<strong>PackPin</strong> is not responsible for delivery delays caused by third-party logistics providers.</li>
        <li>•	All products are assured by sellers for quality and compliance.</li>
      </ul>
  <p><strong>Privacy Policy </strong> Users agree to the <strong>PackPin</strong> Privacy Policy, available at <strong>www.packpin.in/privacy-policy.</strong> By using the website, users consent to the collection, storage, and usage of their personal information by <strong>PackPin</strong> and its affiliates.</p></br>
  <p><strong>Right to Cancel Orders PackPin</strong> reserves the right to cancel any order at its sole discretion. Users will be notified via email/SMS, and any payment will be refunded.</p></br>
  <p> <strong>Indemnification</strong> Users agree to indemnify and hold harmless <strong>PackPin</strong>, its affiliates, directors, employees, and partners from any claims or liabilities arising from violations of these terms.</p></br>
  <ul>
        <li><strong>General Provisions</strong></li>
        <li>•	<strong>PackPin</strong> is provided "as is" without warranties of any kind.</li>
        <li>•	The company does not guarantee confidentiality of user information beyond reasonable efforts.</li>
        <li>•	All disputes are subject to the jurisdiction of the courts in Delhi, India.</li>
      </ul>`,

  "Security Policy": `<p>Shopping online at <strong>PackPin</strong> is safe! At <strong>PackPin</strong>, operated by <strong>Dollky India Pvt. Ltd.</strong>, we are committed to providing a secure online shopping experience. Below are some of the measures we have implemented to ensure your safety and confidence while shopping online.
</br></br>As a consumer, here are a few things to check before transacting online:
</p>
  <br/>
  <ol>
    <li><strong>1. Verify Company Details–</strong><p>Learn more about the company, its background, and key personnel in the "About Us" section. <strong>(Read more about PackPin)</strong>.</p>
    </li>
    <br/>
    <li><strong>2. Contact Information–</strong>
      <p>Ensure you can reach the company through phone, email, live chat, or in person. <strong>(How to Contact PackPin)</strong></p>
    </li>
    <br/>
    <li><strong>3. Privacy Policy–</strong>
      <p>Check if the website has a Privacy Policy that guarantees the protection of your personal data and ensures it won’t be rented or sold to third parties. <strong>(Read PackPin’s Privacy Policy)</strong>.</p>
    </li>
    <br/>
    <li><strong>4. Secure Transactions –</strong>
      <p>Before submitting your credit card details, make sure you are doing so over a secure link. <strong>PackPin</strong> employs SSL (Secure Socket Layer) encryption to protect data transmission and prevent unauthorized access.</p>
    </li>
    <br/>
    <li><strong>5. CVV Security –</strong>
      <p>In physical stores, your credit card number is visible on charge slips. To prevent unauthorized use, <strong>PackPin</strong> requires customers to enter their <strong>CVV (Credit Verification Value)</strong> during checkout. This ensures that the purchaser has physical access to the card.</p>
    </li>
    <br/>
    <li><strong>6. Bank Account Security –</strong>
      <p>For direct bank debits, you are always redirected to your bank’s website, ensuring that your account details are submitted only to the bank and not to <strong>PackPin</strong>.</p>
    </li>
    <br/>
    <li><strong>7. Secure Authentication –</strong>
      <p>When using certain banking services, you may be required to enter a <strong>PIN (Personal Identification Number)</strong> for additional security and authentication.</p>
    </li>
    <br/>
    <li><strong>8. Returns and Refund Policy –</strong>
      <p>Does the company have a fair returns policy? If a product is faulty or defective, is there a clear procedure for requesting a replacement? <strong>(Read PackPin’s Returns and Refund Policy)</strong>.</p>
    </li>
    </br>
    <p>With these simple checks, you can confidently enjoy the convenience of online shopping.</p>
    </br>
    <p>We invite you to experience secure and hassle-free online shopping at <strong>PackPin – Your Packaging Centre.</strong></P>
    <br/>
    
  </ol>`,

  "Shipping Policy": `<p>At PackPin, we are committed to ensuring that your orders are processed, packed, and delivered safely and efficiently. Below is our <strong>Shipping Policy</strong> that outlines the terms and conditions for the shipment of products purchased through our website:</p>
  <br/>
  <ol>
    <li><strong>1. Order Processing</strong>
      <ul>
        <li><strong>Order Confirmation:</strong> Once you place an order on PackPin, you will receive an email confirmation acknowledging your order.</li>
        <li><strong>Processing Time:</strong> Orders are typically processed within 1-2 business days, subject to product availability and verification of payment.</li>
        <li><strong>Custom Orders:</strong> Please note that customized products or packaging may require additional processing time. Any such timeframes will be clearly communicated during the order process.</li>
      </ul>
    </li>
    <br/>
    <li><strong>2.Shipping Methods</strong>
      <ul>
        <li><strong>Standard Shipping:</strong> We offer standard shipping across India. Standard shipping times vary by destination but generally take between 5-10 business days.</li>
        <li><strong>Expedited Shipping:</strong> For faster delivery, expedited shipping options may be available at an additional cost. Delivery timelines for expedited shipping will be indicated during checkout.</li>
        <li><strong>Courier Partners:</strong> We work with trusted courier partners to ensure safe and timely delivery of your products. The specific courier service may vary depending on your location.</li>
      </ul>
    </li>
    <br/>
    <li><strong>3.Delivery Areas</strong>
      <ul>
        <li><strong>•	Domestic Shipping: </strong>We currently ship to all major cities and towns across India. In case of remote areas, delivery times may be extended due to logistical constraints.</li>
        <li><strong>•	International Shipping: </strong> At present, our services are focused on the domestic market. Any updates regarding international shipping will be communicated on our website.</li>
      </ul>
    </li>
    <br/>
    <li><strong>4.Shipping Charges</strong>
      <ul>
        <li><strong>•	Flat Rate/Free Shipping:</strong> Shipping charges may vary depending on your order value, destination, and shipping method selected. Promotional offers, including free shipping, may be available from time to time.</li>
        <li><strong>•	Additional Charges: </strong>Any additional charges incurred due to incorrect or incomplete shipping details provided by the customer will be communicated and may be charged accordingly.</li>
      </ul>
    </li>
    <br/>
    <li><strong>5. Order Tracking</strong>
      <ul>
        <li><strong>•	Tracking Information: </strong> Once your order is shipped, you will receive a tracking number via email or SMS. You can use this tracking number on the courier’s website to monitor the progress of your shipment.</li>
        <li><strong>• Expedited Shipping:</strong> <strong>PackPin</strong> will keep you informed via regular updates about the status of your delivery.</li>
        
      </ul>
    </li>
    <br/>
    <li><strong>6. Delivery Issues</strong>
      <ul>
        <li><strong>•	Non-Delivery: </strong> If you do not receive your order within the specified time frame, please contact our customer support at <strong> support@packpin.in</strong> with your order details. We will investigate and work towards a prompt resolution.</li>
        <li><strong>•	Incorrect Address: </strong> It is the customer’s responsibility to provide accurate and complete shipping information.  <strong> PackPin </strong> will not be liable for delays or non-delivery caused by incorrect or incomplete addresses.</li>
        <li><strong>•	Damaged/Defective Products: </strong> In the unlikely event that you receive a damaged or defective product, please refer to our Returns and Refunds Policy for further instructions. We will do our best to resolve the issue promptly.</li>
      </ul>
    </li>
    <br/>
    <li><strong>7. Force Majeure</strong>
      <ul>
        <li><strong>•	Unforeseen Delays: </strong> <strong> PackPin </strong> shall not be held responsible for any delays or non-delivery due to circumstances beyond our control, including but not limited to natural disasters, strikes, or disruptions in courier services.</li>
      </ul>
    </li>
    <br/>
    <li><strong>8. Contact Us</strong>
      <ul>
      <p>For any questions or concerns regarding our Shipping Policy, please contact our customer service team:</p>
        <li><strong>•	Email: </strong>support@packpin.in</li>
  </ol>`,
};

const Footer = () => {
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState("");

  return (
    <>
      <div>
        {/* Popup Modal */}
        {isPolicyModalOpen && selectedPolicy && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedPolicy}
                </h2>
                <button
                  onClick={() => setIsPolicyModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Policy Content */}
              <div
                className="mb-6 text-gray-600 overflow-y-auto max-h-[60vh]"
                dangerouslySetInnerHTML={{ __html: policies[selectedPolicy] }}
              />

              <button
                onClick={() => setIsPolicyModalOpen(false)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Footer Content */}
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
          <div>
            <img
              src={assets.packpin_logo}
              className="mb-5 w-32"
              alt="Packpin Logo"
            />
            <p className="w-full md:w-2/3 text-gray-600">
              Packpin driven by a commitment to quality and sustainability,
              PackPin offer a diverse range of packaging materials tailored to
              meet the dynamic needs of Resturant, e-commerce, retail,
              logistics, and SMEs. Our customer-centric approach, coupled with
              cutting-edge technology, ensures timely deliveries, competitive
              pricing, and unmatched support.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium mb-5">OUR POLICY</p>
            <ul className="text-gray-600 flex flex-col gap-1">
              <li>
                <Link to="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              {Object.keys(policies).map((policy) => (
                <li key={policy}>
                  <button
                    onClick={() => {
                      setSelectedPolicy(policy);
                      setIsPolicyModalOpen(true);
                    }}
                    className="hover:text-gray-900 cursor-pointer"
                  >
                    {policy}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium mb-5">Get in touch</p>
            <ul className="text-gray-600 flex flex-col gap-1">
              <li>+91-931-918-3330</li>
              <li>Mypack@packpin.in</li>
            </ul>
          </div>
        </div>

        <div>
          <hr />
          <p className="py-5 text-sm text-center">
            Copyright 2025&copy; Packpin. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
