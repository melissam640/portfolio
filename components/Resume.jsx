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
          Education
        </Heading>
        <Text size="5">
          <Strong>University of Southern California</Strong>
        </Text>
        <Text size="3" mb="4">
          Master of Science, Computer Science (Scientists and Engineers) — 
          February 2025 - Current
        </Text>
        <Text size="5">
          <Strong>California Polytechnic State University</Strong>
        </Text>
        <Text size="3" mb="6">
          Bachelor of Science, Construction Management — 
          September 2015 - June 2019
        </Text>
        
        <Heading size="7" mb="4">
          Professional Experience
        </Heading>
        <Text size="5">
          <Strong>Bernards Builders</Strong>, Los Angeles, CA
        </Text>
        <Text size="3" mb="2" ml="6">
          <Strong>Senior Project Engineer</Strong> — November 2021 - August 2023
        </Text>
        <Grid columns="auto 1fr" gap="2" mb="2" ml="6" width="100%">
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Initiated coordination between design and construction teams to 
            deliver structural and finish elements for a $120M construction 
            project through targeted meetings, job site walks, and formal 
            records of contract questions
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Communicated status and potential obstacles of 8 respective 
            subcontractors to owner representatives during weekly stakeholder 
            meetings
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Maintained a remaining work list for 300+ apartment units by 
            identifying issues with owner representatives and assigning work to 
            subcontractors to facilitate project completion
          </Text>
        </Grid>
        <Text size="3" mb="2" ml="6">
          <Strong>Project Engineer</Strong> — July 2019 - November 2021
        </Text>
        <Grid columns="auto 1fr" gap="2" mb="4" ml="6" width="100%">
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Resolved design conflicts and unexpected site conditions by 
            evaluating contractual requirements and physical work in the field 
            to provide solutions for design team approval
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Managed an assigned intern by directing work assignments, providing 
            mentorship on the construction process, and conducting periodic 
            performance reviews
          </Text>
        </Grid>
        <Text size="5">
          <Strong>Herrero Builders</Strong>, San Francisco
        </Text>
        <Text size="3" mb="2" ml="6">
          <Strong>Project Engineer Intern</Strong> — July 2018 - September 2018
        </Text>
        <Grid columns="auto 1fr" gap="2" mb="2" ml="6" width="100%">
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Authored formal information requests to architect by collaborating 
            with construction team to resolve conflicts on a $12M construction 
            project
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Created progress records for a 30,000 sq. ft. building by 
            documenting stages of completion of every room, determining when 
            appropriate to report damage or issues
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Supported the estimating team on a bid for a 12,600 sq. ft. 
            renovation by analyzing historic square footage estimates and 
            performing quantity takeoffs
          </Text>
        </Grid>
        <Text size="3" mb="2" ml="6">
          <Strong>Project Engineer Intern</Strong> — June 2017 - August 2017
        </Text>
        <Grid columns="auto 1fr" gap="2" mb="6" ml="6" width="100%">
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Assisted project engineer with tracking remaining work for a 
            122,700 sq. ft. building by organizing outstanding items and 
            monitoring work process daily
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Arranged city inspections requested by subcontractors, 
            communicating scheduled inspections to project team
          </Text>
          <Box mt="1">
            <DotFilledIcon />
          </Box>
          <Text size="3" ml="1">
            Documented issues blocking final occupancy by independently walking 
            with owner's representatives to advance the project towards 
            completion
          </Text>
        </Grid>

        <Heading size="7" mb="4">
          Technical Skills
        </Heading>
        <Text size="3" mb="6">
          Python | JavaScript | C/C++ | Node | Express | React | Tailwind | Git | VS Code/Copilot
        </Text>
        
        <Heading size="7" mb="4">
          Volunteer Experience
        </Heading>
        <Text size="3">
          <Strong>Hack for LA</Strong>, Civic Tech Organization — 
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
        </Grid>
        
        <Heading size="7" mb="4">
          Additional Education
        </Heading>
        <Text size="3">
          <Strong>Hackbright Academy</Strong>
          , San Francisco, CA — Software Engineering Fellowship
        </Text>
        <Text size="3" mb="6">
          February 2024 - May 2024
        </Text>
      </Flex>
    </Flex>
  );
};

export default Resume;