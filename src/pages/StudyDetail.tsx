import { Image, Box, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import format from "date-fns/format";
import { Button} from '@chakra-ui/react'

export default function StudyDetail() {
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
    <Box maxW="sm" borderWidth="0px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box display="flex">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              작성자
            </Badge>
            우의명
            <Box>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

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
          <Box display="flex" justifyContent="space-between">
            <Box>카테고리</Box>
            <Box as="span" color="gray.600" fontSize="sm">
              온라인 &bull; {property.date}
            </Box>
          </Box>
          <Box>
            {property.period}
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>
          <Box>상세내용</Box>

          <Box display="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              신청 수 12 &bull; 조회 수 40
            </Box>
          </Box>
          
        </Box>
        <Box  display="flex" justifyContent="center">
        <Button  fontSize="x-large" color="green.600" >신청하기</Button>
        </Box>
    </Box>
  );
}
