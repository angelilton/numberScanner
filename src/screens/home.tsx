import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CanScanner from '../componets/CanScanner';
import { ModalInputs } from '../componets/ModalInputs';

const initialProps = {
  cnpj: '',
  chave: '',
  valor: '',
};

const Home = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modaldata, setModaldata] = React.useState(false);
  const [code, setCode] = React.useState(initialProps);

    const handleCodeScanned = ({ data }:any) => {
    const newDate = data.split('|');

    if (newDate) {
      setCode({
        cnpj: newDate[0],
        chave: newDate[1],
        valor: newDate[2],
      });
        setModaldata(true)
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../asset/logo.png')}
        style={{ width: 66, height: 50 }}
      />
      <View style={styles.box}>
        <Text style={styles.header}>Leitura da NFCe ou NFe</Text>
        <Text style={styles.description}>
          Agora você deve realizar a leitura da nota fiscal clicando no botão
          abaixo.
        </Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.btn}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons
            name='qrcode-scan'
            size={35}
            color='#89C53F'
          />
          <Text style={styles.bntText}>Ler qr-code</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={styles.modal}
        >
          <CanScanner handleCodeScanned={handleCodeScanned} />
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.btnClose}
          >
            <Text style={styles.description}>Fechar</Text>
          </TouchableOpacity>
          <View style={styles.boxBorder} />
        </View>
      </Modal>

      <Modal
        visible={modaldata}
        transparent={true}
        animationType='fade'
        onRequestClose={() => setModaldata(false)}
      >
        <ModalInputs showModal={setModaldata} data={code} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: '#89C53F',
    padding: 20,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  modal: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'lightgrey',
    padding: 30,
  },
  boxBorder: {
    width: '100%',
    borderWidth: 3,
    borderRadius: 6,
    borderColor: '#89C53F',
    flex: 1,
    marginTop: 13,
    marginBottom: 60,
  },
  header: {
    fontSize: 32,
    lineHeight: 40,
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'white',
    marginTop: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 70,
    gap: 8,
  },
  bntText: {
    color: '#89C53F',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  btnClose: {
    backgroundColor: '#89C53F',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 100,
  }
});

export default Home;
