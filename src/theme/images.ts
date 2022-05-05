import { Asset } from 'expo-asset';

const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
  calculator_icon: require('../../assets/icons/calculator.png'),
};

// image preloading
export const imageAssets = Object.keys(images).map(key =>
  // @ts-ignore
  Asset.fromModule(images[key]).downloadAsync(),
);

export default images;
