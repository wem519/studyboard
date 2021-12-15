import { Image, Box, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import format from "date-fns/format";

export default function ImageView() {
  const property = {
    count: 5,
    baths: 2,
    title: "스터디원 모집합니다",
    period: "2021.12.20 - 2021.12.31",
    date: format(new Date(), "yyyy-MM-dd"),
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <a href="/study-detail">
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              인원 {property.count}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            온라인 &bull; {property.date}
          </Box>

          <Box>
            {property.period}
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </a>
    </Box>
  );
}
