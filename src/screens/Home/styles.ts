import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex:1, 
    paddingHorizontal: 30,
    paddingTop:100,
    backgroundColor: 'black',
  },
  eventName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: 'white',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    backgroundColor: '#31cf67',
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  }
})