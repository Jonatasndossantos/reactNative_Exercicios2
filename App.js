import { View,Text, StyleSheet, AppRegistry, TextInput,  Modal, Button  } from "react-native";
import React, {useState} from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

export default function App(){

    const [primeiroNumero, setPrimeiroNumero] = useState(0);
    const [segundoNumero, setSegundoNumero] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [resul, setResul] = useState(0);

    const [modalIndex, setModalIndex] = useState(null); // null ou 1..20 para identificar o modal atual
    
    const exercicios = [
        Exercicio01,
        Exercicio02,
        Exercicio03,
        Exercicio04,
        // ...adicione até Exercicio20
    ];
    const titulos = [
        "Múltiplo 3 e 5",
        "Número Primo",
        "Quadrado",
        "Hipotenusa",
        "Positivo/Negativo",
        "Entre 100 e 200",
        "Média Escolar",
        "Novo Salário",
        "Tempo Viagem",
        "Desconto 10%",
        "Salário por Dias",
        "Converter Segundos",
        "Volume Caixa",
        "Tipo Polígono",
        "Desconto Progressivo",
        "Fahrenheit → Celsius",
        "Inverter 3 Dígitos",
        "Total com Imposto",
        "Arredondar Número",
        "Triângulo Válido"
      ];
      

    function limpar(){
        setPrimeiroNumero(null);
        setSegundoNumero(null);
        setResultado(null);
    }
    

    function Exercicio01({ setResultado, resultado, primeiroNumero, setPrimeiroNumero }) {
        return (
            <View>
                <Text style={[styles.tituloPrograma, { fontSize: 26 }]}>Múltiplo de 3 e 5</Text>

                <TextInput 
                    style={[styles.input]} 
                    value={primeiroNumero}
                    onChangeText={setPrimeiroNumero}
                    placeholder="Digite um número"
                    keyboardType="numeric"
                />

                <TouchableOpacity onPress={() => {
                    const num = parseInt(primeiroNumero);
                    setResultado((num % 3 === 0 && num % 5 === 0) ? "✅ É múltiplo de 3 e 5" : "❌ Não é múltiplo de 3 e 5");
                    }}
                    style={{ backgroundColor: '#28a745', marginTop: 20, padding: 14, borderRadius: 10, alignItems: 'center' }}
                >
                    <Text style={[styles.closeButtonText]}>Verificar</Text>
                </TouchableOpacity>
            </View>

        );
    }
    
    function Exercicio02({ setResultado, resultado, primeiroNumero, setPrimeiroNumero }) {
        return (
            <View>
                <Text>Exercício 2: Número Primo</Text>
                <TextInput style={styles.input} value={primeiroNumero} onChangeText={setPrimeiroNumero} placeholder="Digite um número" keyboardType="numeric" />
                <Button title="Verificar" onPress={() => {
                    const num = parseInt(primeiroNumero);
                    let primo = num > 1;
                    for (let i = 2; i < num; i++) {
                        if (num % i === 0) primo = false;
                    }
                    setResultado(primo ? "É primo" : "Não é primo");
                }} />
                <Text style={styles.textoResultado}>{resultado}</Text>
            </View>
        );
    }
    
    function Exercicio03({ setResultado, resultado, primeiroNumero, setPrimeiroNumero }) {
        return (
            <View>
                <Text>Exercício 3: Quadrado de um número</Text>
                <TextInput style={styles.input} value={primeiroNumero} onChangeText={setPrimeiroNumero} placeholder="Digite um número" keyboardType="numeric" />
                <Button title="Calcular" onPress={() => {
                    const num = parseFloat(primeiroNumero);
                    setResultado(num * num);
                }} />
                <Text style={styles.textoResultado}>{resultado}</Text>
            </View>
        );
    }
    
    function Exercicio04({ setResultado, resultado, primeiroNumero, setPrimeiroNumero }) {
        return (
            <View>
                <Text>Exercício 3: Quadrado de um número</Text>
                <TextInput style={styles.input} value={primeiroNumero} onChangeText={setPrimeiroNumero} placeholder="Digite um número" keyboardType="numeric" />
                <Button title="Calcular" onPress={() => {
                    const num = parseFloat(primeiroNumero);
                    setResultado(num * num);
                }} />
                <Text style={styles.textoResultado}>{resultado}</Text>
            </View>
        );
    }
    




    return(

        <View style={styles.tela}> 
            <ScrollView>
            <Text style={styles.tituloPrograma}>Exercícios</Text>

            <View style={styles.areaBotoes}>
                {exercicios.map((_, index) => (
                    <TouchableOpacity
                    key={index}
                    style={styles.botaoExercicio}
                    onPress={() => setModalIndex(index)}
                    >
                        <Text style={styles.botaoExercicioTexto}>
                            {index + 1}. {titulos[index]}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>


            <Modal
                visible={modalIndex !== null}
                animationType="slide"
                onRequestClose={() => setModalIndex(null)}
            >
                <View style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={styles.modalContent}>
                    {modalIndex !== null && React.createElement(exercicios[modalIndex], {
                        setResultado,
                        resultado,
                        primeiroNumero,
                        setPrimeiroNumero
                    })}
                    
                        <View style={styles.areaResultado}>
                            <Text style={[styles.textoResultado]}>{resultado}</Text>                        
                        </View>
                    </ScrollView>

                    <View style={styles.footer}>
                    <TouchableOpacity onPress={() => {
                                                        limpar();
                                                        setModalIndex(null);
                                                        }}style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    tela:{
        backgroundColor: "#ffff",
        height: "100%",
        width: "100%",
    },
    tituloPrograma:{
        marginTop: 50,
        textAlign: "center",
        fontSize: 30,
        fontWeight: 700,    
        color: "#000aaa",
    },
    input:{
        textAlign: "center",
        fontSize: 15,
        color: "000000",
        marginTop: 20, fontSize: 18, padding: 12, borderColor: '#ccc', borderWidth: 1, borderRadius: 10 },
    botao:{
        backgroundColor: "#c1c1c1c1",
        margin: 5,
        padding: 20,
        alignItems: "center",
        width: "30%",
        borderColor: "#ffff",
        borderWidth: 2,
        borderRadius: 38,
    },
    botaoLimpar:{
        backgroundColor: "#cccccc",
        marginTop: 20,
        padding: 20,
        alignItems: "center",
        width: "20%",
        borderColor: "#ffff",
        borderWidth: 2,
        borderRadius: 30,
       
    },
    bot:{
        fontSize: 14,
        fontWeight: 600,
        color: "#00000",
    },
    botLimp:{
        fontSize: 14,
        fontWeight: 600,
        color: "#ffffff",
    },
    areaBotoes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
      },
      
      botaoExercicio: {
        width: '48%',
        backgroundColor: '#007bff',
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
      },
      
      botaoExercicioTexto: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      
    areaResultado:{
        marginTop: 40,
        width: "100%",
        padding: 50,
        display:"flex",
        borderColor: '#ccc', borderWidth: 1, borderRadius: 10 
       
    },
    textoResultado:{
        color: "#00000",
        fontSize: 20,
        textAlign: "center",
        display:"flex",
        
        
    },
    areaLimpar:{
        marginTop: 10,
        width: "100%",
        marginLeft: "40%",
    },
    modalContent: {
        padding: 24,
        paddingBottom: 100, // espaço para o botão fixo
        backgroundColor: '#fff',
        marginTop: 20,
      },
      
      footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: '#f5f5f5',
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
      },
      
      closeButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
      },
      
      closeButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      
});






AppRegistry.registerComponent('main', () => App);