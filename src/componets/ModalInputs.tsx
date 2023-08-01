import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import format from './formatData';

type propsModal = {
  showModal: (arg: boolean) => void;
  data: {
    cnpj: string
    chave: string
    valor: string
  }
};

export const ModalInputs = ({ showModal, data }: propsModal) => {
  return (
    <View style={styles.modal}>
      <TouchableOpacity
        onPress={() => showModal(false)}
        style={styles.btnCloseLight}
      >
        <Text style={styles.btText}>Fechar</Text>
      </TouchableOpacity>
      <View style={styles.Box}>
        <Text style={styles.header}>
          Conferência de informações para pagamento:
        </Text>
        <InputText name='CNPJ:' value={format('cnpj', data.cnpj)} />
        <InputText name='Chave:' value={format('chave',data.chave)} multiline={2} />
        <InputText
          name='Valor:'
          value={format('valor', data.valor)}
          type={'decimal'}
        />
      </View>
    </View>
  );
};


const InputText = ({ value, name, type, multiline }: any) => (
  <View style={{ marginVertical: 20 }}>
    <Text style={styles.text}>{name}</Text>
    <TextInput
      editable={false}
      style={styles.input}
      value={value}
      numberOfLines={multiline}
      multiline={!!multiline}
      inputMode={type}
    />
  </View>
);


const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: '#89C53F',
    padding: 30,
  },
  Box: {
    flex: 1,
    alignSelf: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    lineHeight: 28,
    color: 'white',
  },
  btText: {
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
    textAlign: 'center',
  },
  btnCloseLight: {
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
  input: {
    // height: 40,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10
  },
});
