import { Box, Text } from "@chakra-ui/react";
import useScrollToTop from "../../hooks/useScrollToTop";
import React from "react";

const PrivacyPolicy = () => {
  useScrollToTop();
  return (
    <Box margin={10} textAlign={"center"}>
      <Text
        padding={2}
        backgroundColor={"primary.50"}
        fontSize="xl"
        fontWeight="bold"
        mb={4}
      >
        PRIVACY POLICY
      </Text>
      <Text padding={5}>
        Our Privacy Policy is designed to inform you about how we collect, use,
        disclose, and safeguard your personal information. We are committed to
        ensuring that your privacy is protected and that your personal
        information is handled responsibly.
      </Text>
      <Text padding={5}>
        **Information We Collect:** We may collect various types of information
        when you interact with our website, such as your name, contact details,
        browsing behavior, and purchase history. This information helps us
        personalize your experience and improve our services.{" "}
      </Text>{" "}
      <Text padding={5}>
        **How We Use Your Information:** The information we collect is used to
        process your orders, provide customer support, personalize your shopping
        experience, and send you promotional materials. We do not share your
        information with third parties for marketing purposes without your
        consent.{" "}
      </Text>{" "}
      <Text padding={5}>
        **Data Security:** We implement security measures to protect your
        personal information from unauthorized access, disclosure, alteration,
        or destruction. Your data is stored securely and accessed only by
        authorized personnel.
      </Text>{" "}
      <Text padding={5}>
        **Cookies and Tracking Technologies:** Our website uses cookies and
        similar technologies to enhance your browsing experience and gather
        information about how you use our site. You can manage your cookie
        preferences through our Cookies Settings page.
      </Text>{" "}
      <Text padding={5}>
        **Your Rights:** You have the right to access, correct, update, or
        delete your personal information. If you have any concerns about your
        data, please contact our Privacy Team.
      </Text>{" "}
      <Text padding={5}>
        **Changes to this Policy:** Our Privacy Policy may be updated
        periodically to reflect changes in our practices. We encourage you to
        review the policy whenever you visit our website to stay informed about
        how we protect your privacy. By using our website, you agree to the
        terms outlined in our Privacy Policy. If you have any questions or
        concerns, please don't hesitate to reach out to our Privacy Team.
      </Text>{" "}
    </Box>
  );
};

export default PrivacyPolicy;
