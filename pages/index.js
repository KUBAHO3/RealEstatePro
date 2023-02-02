import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Property from "@/components/Property";
import { baseUrl, fetchApi } from "@/utils/fetchApi";

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner"/>
      <Box p="5">
          <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
          <Text fontSize="3xl" fontWeight="bold">{title1} <br/> {title2}</Text>
          <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
          <Button fontSize="xl" >
            <Link href={linkName}>{buttonText}</Link>
          </Button>
      </Box>
  </Flex>
)

export default function Home({propertiesForSale, propertiesForRent}) {
  //console.log(propertiesForSale, propertiesForRent);
  return (
    <>
      <Box>
        <Banner 
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1="Explore Apertments, Villas, Homes"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Flex flexWrap="wrap">
          {propertiesForRent.map((property)=><Property property={property} key={property.id}/>)}
        </Flex>
        <Banner 
          purpose="Buy A HOME"
          title1="Find, Buy & Own Your"
          title2="Dream Home"
          desc1="Explore Apertments, Villas, Homes"
          desc2="and more"
          buttonText="Explore Buying"
          linkName="/search?purpose=for-sale"
          imageUrl="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Flex flexWrap="wrap">
          {propertiesForSale.map((property)=><Property property={property} key={property.id}/>)}
        </Flex>
      </Box>
    </>
  )
}
 
export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return{
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}