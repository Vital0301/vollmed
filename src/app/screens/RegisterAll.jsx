import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LabeledInput from "../components/LabeledInput";
import ButtonForm from "../components/ButtonForm";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterAll() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Text style={styles.title}>Insira alguns dados básicos</Text>
        <View style={styles.form}>
          <LabeledInput
            label="CEP"
            placeholder="Insira seu CEP"
          />
          <LabeledInput
            label="Endereço"
            placeholder="Insira seu endereço"
          />
          <LabeledInput
            label="Número"
            placeholder="Insira seu número"
          />
          <LabeledInput
            label="Complemento"
            placeholder="Insira seu complemento"
          />
          <LabeledInput
            label="Telefone"
            placeholder="(00) 00000-0000"
          />
          <ButtonForm 
            style={styles.buttonBack}
            textButton="Voltar"
          />
          <ButtonForm 
            textButton="Avançar"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700", // Define o peso da fonte como negrito forte
    textAlign: "center",
    color: "#6b6e71",
    marginBottom: 26,
  },
  form: {
    width: "100%",
    marginTop: 16,
    paddingHorizontal: 20,
  },
  buttonBack: {
    backgroundColor: "#c6c6c6"
  },
})