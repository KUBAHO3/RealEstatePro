import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../assets/images/house.jpg"

const Property =({property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId}})=>(
    <Link href={`/property/${externalId}`} passHref>
        <Flex flexWrap="wrap" w="420px" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto? coverPhoto.url : DefaultImage} width={400} height={260} alt="house"/>
            </Box>
            <Box w="full">
                <Flex alignItems="center" paddingTop="2" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified/>}
                        </Box>
                        <Text fontWeight="bold" fontSize="lg">AED{millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" paddingRight="4" src={agency?.logo?.url}></Avatar>
                    </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms}<FaBed/>{baths}<FaBath/>| {millify(area)} sqft <BsGridFill/>
                </Flex>
                <Text fontSize="lg">
                    {title.length>30?`${title.substring(0,30)}...`: title}
                </Text>
            </Box>
        </Flex>
    </Link>
)

export default Property;