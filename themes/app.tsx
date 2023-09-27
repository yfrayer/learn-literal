import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 80,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  translate: {
    minWidth: 250,
    width: '90%',
    padding: 20,
    margin: 20,
    marginTop: 0,
    borderRadius: 10,
  },
  themeIcon: {
    position: 'absolute',
    marginLeft: 190,
  },
});

export default styles;
