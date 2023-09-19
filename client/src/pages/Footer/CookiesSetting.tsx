import { Box, Center, Text } from "@chakra-ui/react";
import useScrollToTop from "../../hooks/useScrollToTop";
import React from "react";

const CookiesSettings = () => {
  useScrollToTop();
  return (
    <Box margin={10} textAlign={"start"}>
      <Center
        padding={2}
        backgroundColor={"primary.50"}
        fontSize="xl"
        fontWeight="bold"
        mb={4}
      >
        COOKIES SETTINGS
      </Center>
      <Text padding={5}>
        We use cookies to enhance your experience on our website and to provide
        personalized content. By using our website, you consent to the use of
        cookies as described in this Cookies Settings section.
      </Text>
      <Text padding={5}>
        <strong>What are Cookies?</strong> <br />
        <br />
        Cookies are small text files that are stored on your device when you
        visit our website. They help us recognize you and provide a better
        browsing experience. Cookies may collect information about your device,
        preferences, and activities on our website.
      </Text>{" "}
      <Text padding={5}>
        <strong>Types of Cookies We Use:</strong> <br />
        <br />
        <em>Essential Cookies:</em> These cookies are necessary for the basic
        functionality of our website. They enable features like secure logins
        and cart management.
      </Text>{" "}
      <Text padding={5}>
        <em>Analytical Cookies:</em> We use these cookies to analyze website
        traffic and improve our services. They provide insights into how users
        interact with our website.
      </Text>{" "}
      <Text padding={5}>
        <em>Marketing Cookies:</em> These cookies track your browsing behavior
        and help us display personalized content and ads. They may be used to
        build a profile of your interests.
      </Text>{" "}
      <Text padding={5}>
        <strong>Managing Cookies:</strong>
        <br />
        You can control and manage cookies settings in your browser. Most
        browsers allow you to block or delete cookies. However, please note that
        blocking certain cookies may impact the functionality and experience of
        our website.
      </Text>{" "}
      <Text padding={5}>
        By using our website, you consent to the use of cookies as outlined in
        this Cookies Settings section. You can change your cookies preferences
        at any time.
      </Text>{" "}
    </Box>
  );
};

export default CookiesSettings;
