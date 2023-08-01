import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const { width } = Dimensions.get('window');

type CanScannerProps ={
    handleCodeScanned: ({}) => void
}

const CanScanner = ({ handleCodeScanned }:CanScannerProps) => {
  const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const size = PixelRatio.getPixelSizeForLayoutSize(width);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : (props) => {
              setScanned(true);
              handleCodeScanned(props);
          }}
      style={[StyleSheet.absoluteFill, { height: size, width: size }]}
    />
  );
};

export default CanScanner;
