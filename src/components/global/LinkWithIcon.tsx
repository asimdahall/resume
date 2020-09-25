import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Box from "./Box";
import Flex from "./Flex";
import Text from "./Text";

interface IProps {
  link: string;
  linkText: string;
  icon: IconDefinition;
  css?: Record<string, any>;
}

const LinkWithIcon = ({ link, linkText, icon, ...props }: IProps) => {
  return (
    <Flex {...props}>
      <Box
        css={{
          color: "$primary",
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </Box>
      <Text
        as="a"
        target="_blank"
        rel="noreferrer noopener"
        css={{
          marginLeft: "$1",
          fontWeight: 400,
          textDecoration: "none",
          fontFamily: "Barlow",
        }}
        href={link}
      >
        {linkText}
      </Text>
    </Flex>
  );
};

export default LinkWithIcon;
