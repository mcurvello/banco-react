import { Picker, PickerIOS } from "@react-native-picker/picker";
import { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Slider from "@react-native-community/slider";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      idade: "",
      limite: 200,
      sexo: "Masculino",
      sexos: [
        { key: 1, sexo: "Masculino" },
        { key: 2, sexo: "Feminino" },
      ],
      estudante: false,
    };
    this.enviarDados = this.enviarDados.bind(this);
  }

  enviarDados() {
    if (this.state.nome === "" || this.state.idade === "") {
      alert("É necessário preencher todos campos!");
      return;
    }
    alert(
      "Conta aberta com sucesso\n\n" +
        "Nome: " +
        this.state.nome +
        "\n" +
        "Idade: " +
        this.state.idade +
        "\n" +
        "Sexo: " +
        this.state.sexo +
        " \n" +
        "Limite Conta: " +
        this.state.limite.toFixed(2) +
        "\n" +
        "Conta Estudante: " +
        (this.state.estudante ? "Ativo" : "Inativo")
    );
  }

  render() {
    let sexoItem = this.state.sexos.map((value, key) => {
      return <Picker.Item key={key} value={value.sexo} label={value.sexo} />;
    });
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Banco React</Text>
        <View style={styles.formulario}>
          <Text style={styles.label}>Nome: </Text>
          <TextInput
            placeholder="Digite o seu nome"
            style={styles.input}
            onChangeText={(item) => this.setState({ nome: item })}
          />
        </View>
        <View style={styles.formulario}>
          <Text style={styles.label}>Idade: </Text>
          <TextInput
            placeholder="Digite a sua idade"
            style={styles.input}
            onChangeText={(item) => this.setState({ idade: item })}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.picker}>
          <Text style={styles.label}>Sexo: </Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.state.sexo}
            onValueChange={(item) => this.setState({ sexo: item })}
          >
            {sexoItem}
          </Picker>
        </View>
        <View style={styles.picker}>
          <Text style={styles.label}>Limite: </Text>
          <Text style={styles.valor}>R$ {this.state.limite.toFixed(2)}</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1200}
          minimumTrackTintColor="purple"
          value={this.state.limite}
          onValueChange={(item) => this.setState({ limite: item })}
        />
        <View style={styles.formulario}>
          <Text style={styles.label}>Estudante: </Text>
          <Switch
            trackColor={{ true: "purple" }}
            value={this.state.estudante}
            onValueChange={(item) => this.setState({ estudante: item })}
          />
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.enviarDados}>
            <Text style={styles.btnTexto}>Abrir a conta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "purple",
    textAlign: "center",
  },
  formulario: {
    flexDirection: "row",
    margin: 15,
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    fontSize: 20,
    backgroundColor: "#eef",
  },
  valor: {
    flex: 1,
    fontSize: 20,
  },
  picker: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  slider: {
    marginHorizontal: 15,
  },
  btnArea: {
    alignItems: "center",
    marginTop: 45,
  },
  btn: {
    height: 50,
    width: 250,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
  },
  btnTexto: {
    fontSize: 20,
    color: "#fff",
  },
});

export default App;
