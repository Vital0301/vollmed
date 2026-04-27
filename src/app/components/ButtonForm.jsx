import { Pressable, StyleSheet, Text } from "react-native";

// Predefinições para serem usadas como cores
const BG_BUTTON = "#00213D";
const TEXT_PRIMARY = "#FFFFFF";

// Estrutura do botão
export default function ButtonForm({ textButton }) {
    return(
        <Pressable style={styles.button}>
            <Text style={styles.title}>
                { textButton ? textButton : "Não informado" }
            </Text>
        </Pressable>
    )
}

// Estilização
const styles = StyleSheet.create({
  button: {
    backgroundColor: BG_BUTTON,
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    color: TEXT_PRIMARY,
    marginVertical: 2,
    textAlign: "center",
    paddingVertical: 7,
  },
})

const styles2 = StyleSheet.create({
  buttonBack: {
    backgroundColor: "#c6c6c6",
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titleBack: {
    color: TEXT_PRIMARY,
    marginVertical: 2,
    textAlign: "center",
    paddingVertical: 7,
  },
})