import MMKVStorage from 'react-native-mmkv-storage/index';

global.MMKV = new MMKVStorage.Loader().initialize();
