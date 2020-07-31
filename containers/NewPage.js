import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Styles from '../Styles';
import {useForm, Controller} from 'react-hook-form';

// class NewPage extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <View style={Styles.NewUser}>
//         <View style={Styles.NewUserField}>
//           <Text>Name</Text>
//           <TextInput placeholder="Enter your Name" style={Styles.NUTextInput} />
//         </View>
//         <View style={Styles.NewUserField}>
//           <Text>About</Text>
//           <TextInput
//             placeholder="Tell people about you"
//             multiline={true}
//             scrollEnabled={true}
//             style={Styles.NUTextInput}
//           />
//         </View>
//         <View style={Styles.NewUserField}>
//           <Text>Email</Text>
//           <TextInput
//             placeholder="Enter your email"
//             style={Styles.NUTextInput}
//           />
//         </View>
//         <View style={Styles.NewUserField}>
//           <Text>Password</Text>
//           <TextInput style={Styles.NUTextInput} secureTextEntry={true} />
//         </View>
//       </View>
//     );
//   }
// }

const NewPage = () => {
  const {control, handleSubmit, errors} = useForm();
  return <View />;
};

export default NewPage;
