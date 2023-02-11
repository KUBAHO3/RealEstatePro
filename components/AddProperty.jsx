import { useState, useEffect } from "react";
import {
    Box, VStack, Button, Flex, Divider, chakra, Grid, GridItem,
    Container, Text, FormControl, FormLabel, FormHelperText, Input,
     Textarea, Stack, Radio, Select, Checkbox, Image, InputLeftAddon, InputGroup, Spacer,
  } from '@chakra-ui/react';

  
  
  export default function gridListWithCTA() {
    const [postData, setPostData] = useState({ title: '', description: '', price: '', rooms: '', baths: '', area: '', photos: '', coverPhoto: '', purpose: '', type: '', amenities: '', furnishingStatus: '', address: '', completionStatus: '',
                                               //  owner: '', phone: '', isWhatsappable: true, email: '' 
                                              });
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(postData);
      const JSONdata = JSON.stringify(postData)
      const endpoint = 'http://localhost:5000/properties'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      } 
      const response = await fetch(endpoint, options)
      const result = await response.json();
      console.log(result);
    }

    return (
      <Box as={Container} maxW="7xl" mt={2} p={4}>
        <Text marginBottom={3}>Add Property</Text>
        <form onSubmit={handleSubmit}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1} border="1px" p={2}>
            Add Images:
            {/* <Box width="auto" p={4}>
                <Input type='file' size='sm' />
            </Box> */}
            <InputGroup >
              <InputLeftAddon children='Add coverPhoto:' />
              <Input type='file' borderColor='green' value={postData.coverPhoto} onChange={(e) => setPostData({ ...postData, coverPhoto: e.target.value })}/>
            </InputGroup >
            <FormControl marginTop={3}>
              <Text>Add More Photos:</Text>
              <Input type='file' borderColor='green' value={postData.photos} onChange={(e) => setPostData({ ...postData, photos: e.target.value })}/>
              <Input type='file' borderColor='green' value={postData.photos} onChange={(e) => setPostData({ ...postData, photos: e.target.value })}/>              
              <Input type='file' borderColor='green' value={postData.photos} onChange={(e) => setPostData({ ...postData, photos: e.target.value })}/>              
              <Input type='file' borderColor='green' value={postData.photos} onChange={(e) => setPostData({ ...postData, photos: e.target.value })}/>              
              <Input type='file' borderColor='green' value={postData.photos} onChange={(e) => setPostData({ ...postData, photos: e.target.value })}/>              
            </FormControl >
            <FormControl marginTop={3}>
              <Text>Add Amenities:</Text>
              <Textarea type='text' size='sm' placeholder='Split by comma from one another' borderColor='green' value={postData.amenities} onChange={(e) => setPostData({ ...postData, amenities: e.target.value })}/>
            </FormControl>
            <FormControl marginTop={2}>
            <Text>Contact Email:</Text>
              {/* <Input type='text' size='sm' borderColor='green' value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })}/> */}
            </FormControl>
          </GridItem>
          <GridItem border="1px" p={4}>
          <FormControl>
            <Text>Property Title:</Text>
            <Input type='text' size='sm' borderColor='green' value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
          </FormControl>
          <FormControl>
            <Text>Property Description:</Text>
            <Textarea type='text' size='sm' borderColor='green' value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
          </FormControl>
          <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
            }}
            gap={4}>
            <GridItem colSpan={1} >
                <FormControl>
                    <Text>Bedrooms:</Text>
                    <Input type='numbers' size='sm' borderColor='green' value={postData.rooms} onChange={(e) => setPostData({ ...postData, rooms: e.target.value })}/>
                </FormControl>
            </GridItem>
            <GridItem >
                <FormControl>
                    <Text>Baths:</Text>
                    <Input type='numbers' size='sm' borderColor='green' value={postData.baths} onChange={(e) => setPostData({ ...postData, baths: e.target.value })}/>
                </FormControl>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
            }}
            gap={4}>
            <GridItem colSpan={1} >
                <FormControl>
                    <Text>Area:</Text>
                    <Input type='numbers' size='sm' borderColor='green' value={postData.area} onChange={(e) => setPostData({ ...postData, area: e.target.value })}/>
                </FormControl>
            </GridItem>
            <GridItem >
                <FormControl>
                    <Text>Price:</Text>
                    <Input type='numbers' size='sm' borderColor='green' value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })}/>
                </FormControl>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
            }}
            gap={4}
            mt={2}>
            <GridItem colSpan={1} >
                <Select placeholder='Inside:' borderColor='green'  onChange={(e) => setPostData({ ...postData, furnishingStatus: e.target.value })}>
                    <option >Furnitured</option>
                    <option >Not Furnitured</option>
                </Select>
            </GridItem>
            <GridItem >
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                    gap={4}>
                    <GridItem colSpan={1} borderColor='green'>
                        <Select placeholder='Porpose:' borderColor='green'  onChange={(e) => setPostData({ ...postData, purpose: e.target.value })}>
                            <option >for-sale</option>
                            <option >for-rent</option>
                        </Select>
                    </GridItem>
                    <GridItem >
                        <Select placeholder='Status:' borderColor='green' value={postData.completionStatus} onChange={(e) => setPostData({ ...postData, completionStatus: e.target.value })}>
                            <option >Completed</option>
                            <option >Incomplete</option>
                        </Select>
                    </GridItem>
                </Grid>
            </GridItem>
          </Grid>
          <FormControl>
            <Text>Type of Property:</Text>
            <Input type='text' size='sm' placeholder='Villas or apartment?' borderColor='green' value={postData.type} onChange={(e) => setPostData({ ...postData, type: e.target.value })}/>
          </FormControl>
          <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
            }}
            gap={4}>
            <GridItem colSpan={1} >
                <FormControl>
                    <Text>Address:</Text>
                    <Textarea type='text' size='sm' borderColor='green' value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value })}/>
                </FormControl>
            </GridItem>
            <GridItem >
                <FormControl>
                    <Text>PHone:</Text>
                    {/* <Input type='text' size='xs'  placeholder='Owners name' borderColor='green' value={postData.contact.phoneNo.owner} onChange={(e) => setPostData({ ...postData, contact.phoneNo.owner: e.target.value })}/>
                    <Input type='numbers' size='xs'  placeholder='number with code' marginTop={2} borderColor='green' value={postData.phone} onChange={(e) => setPostData({ ...postData, contact.phoneNo.phone: e.target.value })}/>
                    <Checkbox defaultChecked value={postData.isWhatsappable} onChange={(e) => setPostData({ ...postData, isWhatsappable: e.target.value })}>On WhatsApp?</Checkbox> */}
                </FormControl>
            </GridItem>
          </Grid>
          </GridItem>
        </Grid>
        <Flex>          
          <Spacer />
          <Button bg='red.400' size='sm' marginTop={3} marginRight={3}>
            Clear
          </Button>
          <Button type="submit" colorScheme='teal' size='sm' marginTop={3}>
            Submit Property
          </Button>
        </Flex>
        
        <Divider mt={12} mb={12} />
        </form>
      </Box>
    );
  }