import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  field: {
    minWidth: 200,
    maxWidth: 300,
    width: '100%',
    height: 300,
    padding: 10,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#AEAEAE',
    fontSize: 18,
    textAlignVertical: 'top' //android
  },
  input: {
    alignItems: 'center',
  },
  submitBtn: {
    width: 130,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#8FC7EF',
  },
  submitBtnView: {
    alignItems: 'center',
    margin: 10,
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 20,
  },
  line: {
    alignItems: 'center',
    margin: 10,
  },
  words: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  word: {
    alignItems: 'center',
    margin: 5,
  },
  wordOut: {
    fontSize: 18,
    color: '#5FB2EE',
  },
  wordIn: {
    fontSize: 20,
  },
  translation: {
    marginTop: 0,
    fontSize: 18,
  },
});

export default styles;
