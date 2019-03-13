import { StyleSheet } from 'react-360';

export default StyleSheet.create({
  root: {
    flexDirection: 'column',
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rootInfo: {
    backgroundColor: 'white',
    padding: 20,
  },
  rootInfoText: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
  },
  rootButton: {
    width: 100,
    height: 100,
    backgroundColor: '#639dda',
    borderRadius: 100 / 2,
    borderWidth: 0,
  }
});
