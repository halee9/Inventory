import React, { PropTypes, Component } from 'react';
import {
  Image,
  Dimensions,
  View,
  ScrollView
} from 'react-native';

const myHeader = {
  "Content-Type": "text/plain",
  "Authorization": "AWS" + " " + "AKIAIUOVJNY4X73PZV7Q:p4D7ydmBHAiyxZ0/z9PhBW4B2IT+2NM2qbJ3yVcr"
}
/*
fetch('https://halee9.s3.amazonaws.com', {
  method: 'GET',
  headers: myHeader
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
*/
const ImageList = () => (
  <ScrollView>
  </ScrollView>
);

export default ImageList;
