import React, { useEffect } from 'react'
import { Container,Box ,Text,Tab,TabList,TabPanel,TabPanels,Tabs} from '@chakra-ui/react'
import Login from "../components/Authentication/Login.js";
import Signup from "../components/Authentication/Signup";
import { useHistory } from 'react-router-dom'; 
const HomePage = () => {
   const history = useHistory();  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    
    if (user) history.push("/chats");
  }, [history]);

  return <Container maxW='xl' centerContent>
  <Box  display="flex"
       justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
    <Text fontSize="4xl"   > TextMe </Text>
  </Box>
  <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab fontFamily="Inter">Login</Tab>
            <Tab fontFamily="Inter">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
  </Container> ;
    
  
};

export default HomePage