import MMKVStorage from 'react-native-mmkv-storage/index';

export let MMKV;
export const initDb = () => {
  MMKV = new MMKVStorage.Loader().initialize();
};
