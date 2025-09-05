import { Flex, Box, Grid, Link, Text, Heading, Strong } from "@radix-ui/themes";
import { DotFilledIcon } from "@radix-ui/react-icons";
import resume from '/src/assets/MelissaMcGrathResume.pdf';
import './Resume.css';

const Resume = () => {
  return (
    <Flex className="resume-section" direction="column" justify="left" align="center" p="2" gap="4">
      
      {/* Section Title */}
      <Box p="3" gap="4" width="100%">
        <Heading size="9">Resume.</Heading>
      </Box>

      {/* Resume Section */}
      <Flex p="3" direction="column" width="100%">
        <Link align="right" mb="-2" href={resume}>View PDF</Link>

        <Heading size="7" mb="4">
          Technical Skills
        </Heading>
        <Text size="3" mb="6">
          Python | JavaScript | Java | HTML | CSS | React | Git
        </Text>
        
        <Heading size="7" mb="4">
          Education
        </Heading>
        <Text size="3">
          <Strong>University of Southern California</Strong>
          , Los Angeles, CA — Master of Science, Computer Science - Scientists 
          and Engineers
        </Text>
        <Text size="3" mb="4">
          February 2025 - Current
        </Text>
        <Text size="3">
          <Strong>California Polytechnic State University</Strong>
          , San Luis Obispo, CA — Bachelor of Science, Construction Management
        </Text>
        <Text size="3" mb="6">
          September 2015 - June 2019
        </Text>
        
        <Heading size="7" mb="4">
          Professional Experience
        </Heading>
        <Text size="3">
          <Strong>Bernards Builders</Strong>
          , Los Angeles, CA — Senior Project Engineer
        </Text>
        <Text size="3" mb="4">
          July 2019 - August 2023
        </Text>
        <Grid columns="auto 1fr" gap="2" mb="6" width="100%">
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Organized and controlled project elements for 8 structural and finish 
            trades from pre-construction to punchlist (project completion 
            process) on an $120M multi-family project
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Communicated current progress and potential obstacles of respective 
            trades to owner during key stakeholder meetings
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Managed interns by providing mentorship on construction processes, 
            directing work assignments, and conducting periodic performance reviews
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Supported transition of new team members through training on 
            project-specific software
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Initiated coordination between design and construction teams through 
            targeted meetings, job site walks, and formal records of contract 
            questions to resolve field issues
          </Text>
        </Grid>
        <Text size="3">
          <Strong>Herrero Builders</Strong>
          , San Francisco, CA — Project Engineer Intern
        </Text>
        <Text size="3">
          July 2018 - September 2018
        </Text>
        <Text size="3" mb="4">
          June 2017 - August 2017
        </Text>
        <Grid columns="auto 1fr" gap="2" mb="6" width="100%">
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Authored formal requests for information (RFIs) by collaborating with 
            field team to clarify details and requirements of the project
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Assisted project engineer in completing final outstanding 
            construction items by overseeing item resolution by subcontractors 
            and coordinating with owner and end users to establish expectations
          </Text>
        </Grid>
        
        <Heading size="7" mb="4">
          Volunteer Experience
        </Heading>
        <Text size="3">
          <Strong>Hack for LA</Strong>
          , Los Angeles, CA
        </Text>
        <Text size="3" mb="4">
          June 2024 - August 2024
        </Text>
        <Grid columns="auto 1fr" gap="2" mb="6" width="100%">
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Implemented updates to a live website by contributing to an 
            open-source repository
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Coordinated with other developers using 
            GitHub for project tracking, pull requests, and issue resolution
          </Text>
        </Grid>
        
        <Heading size="7" mb="4">
          Additional Education
        </Heading>
        <Text size="3">
          <Strong>Hackbright Academy</Strong>
          , San Francisco, CA — Software Engineering Bootcamp
        </Text>
        <Text size="3" mb="6">
          February 2024 - May 2024
        </Text>
      </Flex>
    </Flex>
  );
};

export default Resume;