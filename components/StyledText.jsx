import { Text } from 'react-native';

export default function MonoText(props) {
  const fontFamily = props.bold ? 'InterSemiBold' : 'Inter';
  
  return <Text {...props} style={[props.style, { fontFamily }]} />;
}
