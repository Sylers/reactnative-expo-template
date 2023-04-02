import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
    if (process.env.MY_ENVIRONMENT === 'production') {
    return {
       ...config,
        name: 'reactnative-expo-template',
        slug: 'reactnative-expo-template',
        extra: {
            //Takes in extra data/variable you want to use in your app
            //Available on expo.constants
        }
    };
  } else {
    return {
       ...config,
       name: 'reactnative-expo-template',
        slug: 'reactnative-expo-template',
        extra: {
            //Takes in extra data/variable you want to use in your app
            //Available on expo.constants
            //e.g APIKey
        }

    };
  }
};
