import {Pressable, Text, View} from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {
  
  //se recomienda de esta forma para no tener efectos secundarios de renderizados inesperados
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);


  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ name }</Text>
      <Text style={ styles.title }>{ email }</Text>

      <Pressable 
        onPress={() => useProfileStore.setState({ name: 'Alexander Herrera'})}
        style={ styles.primaryButton }>
        <Text>Change name</Text>
      </Pressable>
      <Pressable 
        onPress={() => useProfileStore.setState({ email: 'alexander@gmail.com'})}
        style={ styles.primaryButton }>
        <Text>Change email</Text>
      </Pressable>
      <Pressable 
        onPress={() => changeProfile('John Dor', 'john.doe@google.com')}
        style={ styles.primaryButton }>
        <Text>Back to John</Text>
      </Pressable>

    </View>
  );
};