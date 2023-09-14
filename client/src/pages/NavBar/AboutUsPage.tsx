import React from "react";
import {
  Grid,
  Text,
  Image,
  Box,
  ListItem,
  UnorderedList,
  GridItem,
} from "@chakra-ui/react";
import img from "../../images/ahmed-carter-tiWcNvpQF4E-unsplash (1).webp";
import useScrollToTop from "../../hooks/useScrollToTop";
const AboutUsPage = () => {
  useScrollToTop();
  return (
    <Box bg="gray.100" p={12}>
      <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={12}>
        <Box height="100%" bg="white" p={10} borderRadius="md" boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            Welcome to Shop-Shopping!
          </Text>
          <br />
          <br />
          <Text textAlign={"justify"}>
            At Shop-Shopping, we've been on a journey since 2015, with a single
            vision in mind: to become the epitome of a successful online
            shopping experience. Founded by the visionary entrepreneur Dijana
            V.N., our company has grown from humble beginnings to a leading
            destination for modern-day retail therapy. What started as a passion
            project has now blossomed into a haven for all your fashion,
            electronics, and jewelry desires. We take immense pride in curating
            a diverse range of products that cater to both men and women,
            ensuring that every shopper finds something to elevate their style
            and enhance their lifestyle.
            <br />
            <br />
            Our commitment to excellence is unwavering. We understand the
            importance of delivering beyond expectations, which is why we've
            made it our mission to provide you with an exceptional level of
            service. At Shop-Shopping, you can expect:
            <br />
            <br />{" "}
          </Text>
          <UnorderedList>
            <ListItem>
              <Text fontWeight="bold">Reliable Deliveries:</Text> We believe in
              keeping our promises. With us, your orders are more than just
              packages – they are a commitment. Count on us to deliver your
              purchases promptly and as agreed, so you can enjoy your new finds
              without delay.
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Quality and Quantity Assurance:</Text> We
              know that your satisfaction depends on the quality and quantity of
              your purchases. Our meticulous attention to detail ensures that
              each product meets the highest standards, leaving no room for
              compromise.
            </ListItem>
            <ListItem>
              <Text fontWeight="bold"> A Seamless Online Experience:</Text>{" "}
              Navigating our website is designed to be as effortless as your
              shopping spree. Our user-friendly interface ensures that you have
              a smooth and enjoyable experience, making your online shopping
              journey as memorable as the products themselves.
            </ListItem>
          </UnorderedList>
          <Text>
            <br />
            <br />
            At Shop-Shopping, we stand for much more than just retail – we stand
            for the best online experience. We take pride in being your go-to
            destination for fashion-forward finds and cutting-edge electronics,
            all curated with a touch of elegance that jewelry lovers will adore.
            Join us on this exciting journey, where every click brings you
            closer to the trends, styles, and innovations that define modern
            living. Thank you for choosing Shop-Shopping, where shopping is more
            than a transaction – it's an experience.
            <br />
            <br />
            Happy Shopping!
            <br />
            Sincerely, The Shop-Shopping Team
          </Text>
        </Box>{" "}
        <GridItem display={{ base: "none", lg: "block" }}>
          <Image height="100%" src={img} alt="Shop-Shopping" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AboutUsPage;
