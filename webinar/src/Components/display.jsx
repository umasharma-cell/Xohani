import React from "react";
import { Box, Image, Text, Button, Flex, Badge, HStack, Icon } from "@chakra-ui/react";
import users from "./users"; 
const WebinarList = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Upcoming Webinars
      </Text>
      {users.map((user) => (
        <Box
          key={user.id}
          display="flex"
          border="1px solid #E2E8F0"
          borderRadius="lg"
          p={5}
          mb={4}
          shadow="md"
          alignItems="center"
          bg="white"
        >
          <Image src={user.image} alt={user.title} boxSize="60px" borderRadius="md" mr={4} />

          <Box flex="1">
            <Text fontSize="lg" fontWeight="bold">
              {user.title}
            </Text>
            <Text fontSize="sm" color="gray.600" noOfLines={2}>
              {user.description}
            </Text>

           
            <HStack spacing={1} mt={2}>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <Icon key={i}  color={i < Math.floor(user.rating) ? "purple.400" : "gray.300"} />
                ))}
              <Text fontSize="sm" color="gray.600">
                {user.rating}
              </Text>
              <Badge colorScheme="purple" ml={2}>
                Active
              </Badge>
            </HStack>

              <Text fontSize="sm" color="gray.500" mt={2}>
              {user.enrolled} people have enrolled till now
            </Text>

            <Flex justify="space-between" align="center" mt={3}>
              <Text fontSize="md" fontWeight="bold" color="blue.500">
                Price: ${user.price}
              </Text>
              <Button colorScheme="purple" size="sm">
                Enroll Now
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default WebinarList;
