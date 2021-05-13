import {
  Box,
  Button,
  Center, FormControl,
  FormHelperText,
  FormLabel,
  Heading, useToast,
  Image, Input,
  Textarea
} from "@chakra-ui/react";
import axios from "axios";
import { FormikErrors, useFormik } from "formik";
import { useState } from "react";
import { WidgetLoader } from 'react-cloudinary-upload-widget';
import Profile from "../utils";
type CreateFormType = {
  name: string;
  content: string;
  title:string;
};
const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showSelect, setShowSelect] = useState<boolean>(true)
  const [url, setUrl] = useState<any>(null);
const toast = useToast()
  const {
    values: { name, content,title },
    errors,
    dirty,
    handleChange,
    handleSubmit,
    touched
  } = useFormik<CreateFormType>({
    initialValues: {
      name: "",
      content: "",
      title:""
    },
    validate: (formValues: CreateFormType) => {
      const errors: FormikErrors<CreateFormType> = {};
      if (formValues.name === "" && touched) {
        errors.name = "Name must be filled";
      }
      if (formValues.content === "" && touched) {
        errors.content = "Message must be filled";
      }
      if (formValues.title === "" && touched) {
        errors.content = "title must be filled";
      }
      if (formValues.name.indexOf("script") > -1) {
        errors.name = "invalid characters";
      }
      if (formValues.content.indexOf("script") > -1) {
        errors.content = "invalid characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      if(url === null){
        toast({
          description: "You must choose image!, Click on 'Select Image'",
          status: "error",
          position: "bottom",
          isClosable: true,
        });
      }else{
        console.log({...values, image:url});
        const obj = {
          ...values, image: url
        }
        axios.post('http://store77.herokuapp.com/api/testmonials',obj)
      }
    },
  });
  return (
    <Box mb={8} w="full">
      <Heading mb={4} letterSpacing={1}>Submit Testmonial</Heading>
      {url &&

        <Center>

          <Image boxSize="200px"
            borderRadius="full"
            objectFit="cover" src={url} />
        </Center>

      }
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="What is your Good name?"
          value={name}
          name="name"
          errorBorderColor="crimson"
          isInvalid={errors?.name && touched.name ? true : false}
          onChange={handleChange}
        />
        {errors?.name && (
          <FormHelperText color="crimson">{touched.name ? errors.name : ""}</FormHelperText>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Textarea
          type="text"
          placeholder="Add a cool title Here!"
          value={title}
          name="title"
          errorBorderColor="crimson"
          isInvalid={errors?.title && touched.title ? true : false}
          onChange={handleChange}
          size="lg"
        />
        {errors?.title && (
          <FormHelperText color="crimson">{touched?.title ? errors.title : ""}</FormHelperText>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          placeholder="Write your Testmonial Here!"
          value={content}
          name="content"
          errorBorderColor="crimson"
          isInvalid={errors?.content && touched.content ? true : false}
          onChange={handleChange}
          size="lg"
        />
        {errors?.content && (
          <FormHelperText color="crimson">{touched?.content ? errors.content : ""}</FormHelperText>
        )}
      </FormControl>
      {
        url !== null ? "" : <FormControl>
          <WidgetLoader />
          <Profile url={url} setUrl={setUrl} />
        </FormControl>
      }

      <FormControl>
        <Button
          // disabled={!dirty || (dirty && Object.keys(errors).length > 0)}
          onClick={() => handleSubmit()}
          colorScheme="green"
          w="full"
          mt={3}
          mb={3}
        >
          Submit!
        </Button>
      </FormControl>
    </Box>
  );
};

export default Home;
