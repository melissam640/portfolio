import { Flex, Box, Text, Heading } from "@radix-ui/themes";
import './AboutMe.css';

const AboutMe = () => {
  return (
    <Flex className="about-me-section" direction="column" justify="left" align="center" p="2" gap="4">
      
      {/* Section Title */}
      <Box p="3" gap="4" width="100%">
        <Heading size="9">About Me.</Heading>
      </Box>

      {/* Personal Bio Section */}
      <Flex p="3" direction="column" gap="4" width="100%">
        <Text size="3">
          After graduating from Cal Poly SLO with a Construction Management 
          degree, I began my career as a Project Engineer. Being part of the 
          construction team, I loved the problem-solving that came with 
          figuring out how to bring a set of plans into reality. I felt excited 
          and accomplished when finding a creative solution.
        </Text>
        <Text size="3">
          At the end of a 4 year project, driven by a genuine enjoyment for 
          coding and critical thinking, I completed introductory coding classes 
          and eventually enrolled in a software engineering bootcamp. I went 
          from writing my first for-loop to building my first full-stack web 
          application.
        </Text>
        <Text size="3">
          To further strengthen these skills and expand my knowledge of computer 
          science, I enrolled in a Computer Science Master's program at 
          University of Southern California. This portfolio showcases some of 
          the projects I have completed during my studies and independently.
        </Text>
        <Text size="3">
          I am currently a student at USC anticipating completing my degree in 
          Spring of 2027, excited to take on the next phase of my career with 
          strengthened analytical and problem-solving skills.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
