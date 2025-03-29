import React from "react";
import { Box, Flex, Text, Button, VStack , Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logon.png";

const Dashboard = () => {
  return (
    <Box fontFamily="Arial, sans-serif">
      
      <Flex bg="purple.700" color="white" p={2} justify="space-between" align="center">
        <Text fontSize="sm">
           New webinar releasing on <strong>23 April 2025</strong> -  
            Learn More
        </Text>
      </Flex>

      <Flex height="100vh">
        <Box w="250px" bg="gray.100" p={4}>
          <Box mb={6}>
            <Flex align="center" mb={4}>
            <Image src={logo} alt="Logo" boxSize="50px" mr={3} />
            </Flex>

          </Box>
          <VStack align="stretch" spacing={4}>
          <Button as={RouterLink} to="/webinar-details" bg="purple.600" color="white" _hover={{ bg: "purple.500" }} fontSize="md">
              Home
            </Button>
            <Button as={RouterLink} to="/bookmarks" bg="purple.600" color="white" _hover={{ bg: "purple.500" }} fontSize="md">
              My Bookmarks
            </Button>
            
          </VStack>
        </Box>
       
        <Box flex="1" p={6} bg="gray.50">
          <Flex justify="flex-end">
            <Button bg="purple.600" color="white" _hover={{ bg: "purple.500" }}>
              + Create Webinar
            </Button>
          </Flex>

          <Box mt={6}>
            <Text fontSize="2xl" fontWeight="bold">Welcome to the Webinars Dashboard</Text>
            <Text fontSize="md" color="gray.600">Select a section from the sidebar.</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
