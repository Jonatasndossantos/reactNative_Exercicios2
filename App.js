import React, { useState } from "react";
import { AppRegistry, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const registroExercicios = {};

function registrarExercicio(componente) {
    const nome = componente?.name ?? "";
    const match = nome.match(/^Exercicio(\d{2})$/);
    if (match) {
        const numero = parseInt(match[1], 10) - 1;
        registroExercicios[numero] = componente;
    } else {
        console.warn("❌ Nome inválido para exercício:", nome);
    }
}
export default function App(){

    const [primeiroNumero, setPrimeiroNumero] = useState(0);
    const [segundoNumero, setSegundoNumero] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [resul, setResul] = useState(0);

    const [modalIndex, setModalIndex] = useState(null); // null ou 1..20 para identificar o modal atual
    
    



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
    
    
    function Exercicio01({ setResultado}) {
        return (
            <View>
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
                    style={styles.btn}
                >
                    <Text style={[styles.closeButtonText]}>Verificar</Text>
                </TouchableOpacity>
            </View>

        );
    }
    registrarExercicio(Exercicio01);
    
    
    function Exercicio02({ setResultado}) {
        return (
            <View>
                <TextInput style={styles.input} value={primeiroNumero} onChangeText={setPrimeiroNumero} placeholder="Digite um número" keyboardType="numeric" />
                <TouchableOpacity style={styles.btn} title="Verificar" onPress={() => {
                    const num = parseInt(primeiroNumero);
                    let primo = num > 1;
                    for (let i = 2; i < num; i++) {
                        if (num % i === 0) primo = false;
                    }
                    setResultado(primo ? "É primo" : "Não é primo");
                }}
                >
                    <Text style={[styles.closeButtonText]}>Verificar</Text>
                </TouchableOpacity>                 
            </View>
        );
    }
    registrarExercicio(Exercicio02);
    
    
    function Exercicio03({ setResultado}) {
        return (
            <View>
                <TextInput style={styles.input} value={primeiroNumero} onChangeText={setPrimeiroNumero} placeholder="Digite um número" keyboardType="numeric" />
                <TouchableOpacity style={styles.btn}  title="Calcular" onPress={() => {
                    const num = parseFloat(primeiroNumero);
                    setResultado(num * num);
                }} >
                    <Text style={[styles.closeButtonText]}>Verificar</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio03);
    
    
    function Exercicio04({ setResultado }) {
        return (
            <View>
                <TextInput style={styles.input} value={primeiroNumero} onChangeText={setPrimeiroNumero} placeholder="Cateto 1" keyboardType="numeric" />
                <TextInput style={styles.input} value={segundoNumero} onChangeText={setSegundoNumero} placeholder="Cateto 2" keyboardType="numeric" />
                <TouchableOpacity style={styles.btn} onPress={() => {
                    const a = parseFloat(primeiroNumero);
                    const b = parseFloat(segundoNumero);
                    const h = Math.sqrt(a * a + b * b).toFixed(2);
                    setResultado(`Hipotenusa = ${h}`);
                }}>
                    <Text style={styles.closeButtonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio04);

    
    function Exercicio05({ setResultado }) {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={primeiroNumero}
                    onChangeText={setPrimeiroNumero}
                    placeholder="Digite um número"
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.btn} onPress={() => {
                    const num = parseFloat(primeiroNumero);
                    if (num > 0) setResultado("✅ Número positivo");
                    else if (num < 0) setResultado("🔻 Número negativo");
                    else setResultado("🟰 Zero");
                }}>
                    <Text style={styles.closeButtonText}>Verificar</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio05);
    
    
    function Exercicio06({ setResultado }) {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={primeiroNumero}
                    onChangeText={setPrimeiroNumero}
                    placeholder="Digite um número"
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.btn} onPress={() => {
                    const num = parseFloat(primeiroNumero);
                    const estaEntre = num >= 100 && num <= 200;
                    setResultado(estaEntre ? "✅ Está entre 100 e 200" : "❌ Está fora do intervalo");
                }}>
                    <Text style={styles.closeButtonText}>Verificar</Text>
                </TouchableOpacity>
            </View>
        );        
    }
    registrarExercicio(Exercicio06);

    
    function Exercicio07({ setResultado }) {
        const [notas, setNotas] = useState(["", "", "", ""]);
    
        const atualizarNota = (index, valor) => {
            const novas = [...notas];
            novas[index] = valor;
            setNotas(novas);
        };
    
        return (
            <View>
                {[0, 1, 2, 3].map((i) => (
                    <TextInput
                        key={i}
                        style={styles.input}
                        value={notas[i]}
                        onChangeText={(valor) => atualizarNota(i, valor)}
                        placeholder={`Nota ${i + 1}`}
                        keyboardType="numeric"
                    />
                ))}
    
                <TouchableOpacity style={styles.btn} onPress={() => {
                    const nums = notas.map(n => parseFloat(n) || 0);
                    const media = (nums.reduce((a, b) => a + b, 0)) / 4;
                    setResultado(media >= 6 
                        ? `✅ Aprovado com média ${media.toFixed(2)}`
                        : `❌ Reprovado com média ${media.toFixed(2)}`);
                }}>
                    <Text style={styles.closeButtonText}>Calcular Média</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio07);
    
    function Exercicio08({ setResultado }) {
        const [salario, setSalario] = useState("");
        const [percentual, setPercentual] = useState("");
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={salario}
                    onChangeText={setSalario}
                    placeholder="Salário atual"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={percentual}
                    onChangeText={setPercentual}
                    placeholder="Percentual de aumento (%)"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const s = parseFloat(salario);
                        const p = parseFloat(percentual);
                        const novoSalario = s + (s * p / 100);
                        setResultado(`💰 Novo salário: R$ ${novoSalario.toFixed(2)}`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio08);
    
    function Exercicio09({ setResultado }) {
        const [distancia, setDistancia] = useState("");
        const [velocidade, setVelocidade] = useState("");
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={distancia}
                    onChangeText={setDistancia}
                    placeholder="Distância (km)"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={velocidade}
                    onChangeText={setVelocidade}
                    placeholder="Velocidade média (km/h)"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const d = parseFloat(distancia);
                        const v = parseFloat(velocidade);
                        if (!v || v <= 0) {
                            setResultado("❌ Velocidade deve ser maior que zero");
                            return;
                        }
    
                        const tempo = d / v;
                        const horas = Math.floor(tempo);
                        const minutos = Math.round((tempo - horas) * 60);
    
                        setResultado(`🕒 Tempo estimado: ${horas}h ${minutos}min`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio09);

    function Exercicio10({ setResultado }) {
        const [valorCompra, setValorCompra] = useState("");
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={valorCompra}
                    onChangeText={setValorCompra}
                    placeholder="Valor da compra (R$)"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const valor = parseFloat(valorCompra);
                        if (isNaN(valor) || valor <= 0) {
                            setResultado("❌ Informe um valor válido maior que zero");
                            return;
                        }
                        const desconto = valor * 0.10;
                        const valorFinal = valor - desconto;
                        setResultado(`💸 Desconto: R$ ${desconto.toFixed(2)}\n🛍️ Total a pagar: R$ ${valorFinal.toFixed(2)}`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Calcular Desconto</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio10);
    
    function Exercicio11({ setResultado }) {
        const [dias, setDias] = useState("");
        const [diaria, setDiaria] = useState("");
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={dias}
                    onChangeText={setDias}
                    placeholder="Dias trabalhados"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={diaria}
                    onChangeText={setDiaria}
                    placeholder="Valor da diária (R$)"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const d = parseFloat(dias);
                        const v = parseFloat(diaria);
                        if (isNaN(d) || isNaN(v) || d < 0 || v < 0) {
                            setResultado("❌ Insira valores válidos e positivos");
                            return;
                        }
                        const salario = d * v;
                        setResultado(`💼 Salário total: R$ ${salario.toFixed(2)}`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio11);
    
    function Exercicio12({ setResultado }) {
        const [segundos, setSegundos] = useState("");
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={segundos}
                    onChangeText={setSegundos}
                    placeholder="Total de segundos"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const total = parseInt(segundos);
                        if (isNaN(total) || total < 0) {
                            setResultado("❌ Informe um valor válido e positivo");
                            return;
                        }
    
                        const h = Math.floor(total / 3600);
                        const m = Math.floor((total % 3600) / 60);
                        const s = total % 60;
    
                        setResultado(`⏱️ ${h}h ${m}min ${s}s`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Converter</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio12);

    function Exercicio13({ setResultado }) {
        const [comprimento, setComprimento] = useState("");
        const [largura, setLargura] = useState("");
        const [altura, setAltura] = useState("");
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={comprimento}
                    onChangeText={setComprimento}
                    placeholder="Comprimento (m)"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={largura}
                    onChangeText={setLargura}
                    placeholder="Largura (m)"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={altura}
                    onChangeText={setAltura}
                    placeholder="Altura (m)"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const c = parseFloat(comprimento);
                        const l = parseFloat(largura);
                        const a = parseFloat(altura);
    
                        if ([c, l, a].some(v => isNaN(v) || v <= 0)) {
                            setResultado("❌ Informe medidas válidas e maiores que zero");
                            return;
                        }
    
                        const volume = c * l * a;
                        setResultado(`🧊 Volume: ${volume.toFixed(2)} m³`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Calcular Volume</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio13);
    
    function Exercicio14({ setResultado }) {
        const [lados, setLados] = useState("");
    
        const figuras = {
            3: "Triângulo",
            4: "Quadrado",
            5: "Pentágono",
            6: "Hexágono",
            7: "Heptágono",
            8: "Octógono",
            9: "Eneágono",
            10: "Decágono"
        };
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={lados}
                    onChangeText={setLados}
                    placeholder="Número de lados"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const n = parseInt(lados);
                        if (figuras[n]) {
                            setResultado(` ${figuras[n]}`);
                        } else {
                            setResultado("❌ Número de lados não suportado (use 3 a 10)");
                        }
                    }}
                >
                    <Text style={styles.closeButtonText}>Identificar</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio14);
    
    function Exercicio15({ setResultado }) {
        const [valor, setValor] = useState("");
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={valor}
                    onChangeText={setValor}
                    placeholder="Valor da compra (R$)"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const v = parseFloat(valor);
                        if (isNaN(v) || v <= 0) {
                            setResultado("❌ Informe um valor válido e maior que zero");
                            return;
                        }
    
                        let percentual = 0;
                        if (v < 100) percentual = 5;
                        else if (v <= 500) percentual = 10;
                        else percentual = 15;
    
                        const desconto = v * (percentual / 100);
                        const total = v - desconto;
    
                        setResultado(`🛍️ Desconto de ${percentual}%\n💸 Valor final: R$ ${total.toFixed(2)}`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Aplicar Desconto</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio15);
    
    function Exercicio16({ setResultado }) {
        const [fahrenheit, setFahrenheit] = useState("");

        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={fahrenheit}
                    onChangeText={setFahrenheit}
                    placeholder="Temperatura (°F)"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const f = parseFloat(fahrenheit);
                        if (isNaN(f)) {
                            setResultado("❌ Informe uma temperatura válida");
                            return;
                        }

                        const c = (f - 32) * 5 / 9;
                        setResultado(`🌡️ Celsius: ${c.toFixed(2)}°C`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Converter</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio16);

    function Exercicio17({ setResultado }) {
        const [numero, setNumero] = useState("");
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={numero}
                    onChangeText={setNumero}
                    placeholder="Número de 3 dígitos"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const n = parseInt(numero);
                        if (isNaN(n) || n < 100 || n > 999) {
                            setResultado("❌ Digite um número de exatamente 3 dígitos");
                            return;
                        }
    
                        const invertido = numero.split("").reverse().join("");
                        setResultado(`🔁 Invertido: ${invertido}`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Inverter</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio17);
    
    function Exercicio18({ setResultado }) {
        const [preco, setPreco] = useState("");
        const [quantidade, setQuantidade] = useState("");
    
        return (
            <View>
                <TextInput
                    style={styles.input}
                    value={preco}
                    onChangeText={setPreco}
                    placeholder="Preço unitário (R$)"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={quantidade}
                    onChangeText={setQuantidade}
                    placeholder="Quantidade"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        const p = parseFloat(preco);
                        const q = parseInt(quantidade);
    
                        if (isNaN(p) || isNaN(q) || p <= 0 || q <= 0) {
                            setResultado("❌ Informe preço e quantidade válidos");
                            return;
                        }
    
                        const total = p * q * 1.12;
                        setResultado(`🧾 Total com 12% de imposto: R$ ${total.toFixed(2)}`);
                    }}
                >
                    <Text style={styles.closeButtonText}>Calcular Total</Text>
                </TouchableOpacity>
            </View>
        );
    }
    registrarExercicio(Exercicio18);
    
    
    
    
    


    const exercicios = Object.entries(registroExercicios).sort(([a], [b]) => a - b);
    return(

        <View style={styles.modalContent}> 
            <ScrollView>
            <Text style={[styles.tituloPrograma, { fontSize: 35, marginTop: 80, marginBottom: 50}]}>Exercícios</Text>

            <View style={styles.areaBotoes}>
            {exercicios.map(([index]) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.botaoExercicio}
                    onPress={() => setModalIndex(Number(index))}
                  >
                    <Text style={styles.botaoExercicioTexto}>
                      {Number(index) + 1}. {titulos[index]}
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
                <ScrollView 
                    style={styles.modalContent}>
                    {modalIndex !== null && (
                        <View>
                            <Text style={[styles.tituloPrograma]}>{titulos[modalIndex]}</Text>

                            {React.createElement(registroExercicios[modalIndex], {
                                setResultado,
                            })}

                            <View style={styles.areaResultado}>
                                <Text style={styles.textoResultado}>{resultado}</Text>
                            </View>
                        </View>
                    )}
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
    tituloPrograma:{
        marginTop: 50,
        marginBottom: 40,
        textAlign: "center",
        fontSize: 28,
        fontWeight: 700,
        color: "#00000",
    },
    input:{
        textAlign: "center",
        fontSize: 15,
        color: "#00000",
        marginTop: 20, 
        fontSize: 18, 
        padding: 12, 
        borderColor: '#ffffff',
        borderWidth: 1, 
        borderRadius: 10, 
    },
    btn:{
        backgroundColor: '#28a745', 
        marginTop: 20, 
        padding: 14, 
        borderRadius: 10, 
        alignItems: 'center',
    },
    areaBotoes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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
        borderColor: '#ffff', 
        borderWidth: 1, 
        borderRadius: 10,
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
        height: "100%",
        width: "100%",
        padding: 24,
        paddingBottom: 30, // espaço para o botão fixo
        backgroundColor: '#aed6f1',
    },    
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: '#aed6f1',
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