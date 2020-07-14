import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  headerImg: {
    height: 200,
    width: undefined,
  },
  userView: {
    alignItems: 'center',
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    top: 50,
    position: 'absolute',
  },
  aboutText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    top: 10,
  },
  aboutContent: {
    top: 6,
    margin: 20,
  },
  linkView: {
    padding: 15,
    borderBottomWidth: 2,
    borderColor: '#eee',
  },
  NewUser: {
    backgroundColor: '#9765F4',
    flex: 1,
    justifyContent: 'center',
  },
  NewUserField: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
  },
  NUTextInput: {
    padding: 2,
    margin: 10,
    width: 300,
    borderRadius: 50,
    textAlign: 'center',
  },
});

export default Styles;
