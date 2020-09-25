import {
  faDev,
  faFacebook,
  faInstagram,
  faMailchimp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationArrow,
  faMailBulk,
  faMarker,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Box from "./global/Box";
import Flex from "./global/Flex";
import LinkWithIcon from "./global/LinkWithIcon";
import Text from "./global/Text";

const Header: React.FC = () => {
  return (
    <Flex
      css={{
        borderTopColor: "$primary",
        borderTopWidth: "20px",
        borderTopStyle: "solid",
        padding: "3rem",
        backgroundColor: "$gray",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Text
          css={{
            fontSize: "3.2rem",
            color: "$primary",
            borderBottom: "2px solid $darkGray",
          }}
        >
          Asim Dahal
        </Text>
        <Box
          css={{
            fontSize: "2rem",
            marginTop: "$2",
            color: "$primary",
          }}
        >
          <Text
            as="span"
            css={{
              fontSize: "2.8rem",
              color: "$secondary",
              marginRight: "$1",
            }}
          >
            #
          </Text>
          Javascript Engineer
        </Box>
        <Flex
          css={{
            marginTop: "$2",
          }}
        >
          <LinkWithIcon
            icon={faFacebook}
            link="https://www.facebook.com/asimdahall"
            css={{
              marginLeft: "0",
            }}
            linkText="/facebook"
          />
          <LinkWithIcon
            icon={faTwitter}
            link="https://www.twitter.com/asimdahall"
            css={{
              marginLeft: "1rem",
            }}
            linkText="/twitter"
          />
          <LinkWithIcon
            icon={faInstagram}
            link="https://www.instagram.com/asimdahal"
            css={{
              marginLeft: "1rem",
            }}
            linkText="/instagram"
          />
          <LinkWithIcon
            icon={faDev}
            link="https://dev.to/asimdahall"
            css={{
              marginLeft: "1rem",
            }}
            linkText="/dev"
          />
        </Flex>
      </Box>
      <Flex
        css={{
          justifyContent: "center",
          flexDirection: "column",
          marginRight: "4rem",
        }}
      >
        <LinkWithIcon
          icon={faLocationArrow}
          linkText="Tikathali, Lalitpur, Nepal"
          link="#"
        />
        <LinkWithIcon
          icon={faEnvelope}
          linkText="dahalasim1997@gmail.com"
          link="#"
          css={{
            marginTop: "$2",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
