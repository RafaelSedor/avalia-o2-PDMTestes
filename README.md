# Testes Automatizados em Aplicações React Native/Expo
Introdução
O desenvolvimento de aplicações móveis com React Native/Expo demanda cuidados similares aos aplicativos web. Embora os testes realizados por humanos ofereçam garantia nas funcionalidades desenvolvidas, a incorporação de testes automatizados é fundamental para assegurar a estabilidade e o desempenho da aplicação.

# Diferença entre Testes Unitários e Testes E2E em Aplicações Mobile
# Testes Unitários
Os testes unitários concentram-se na validação de unidades isoladas de código, como componentes, funções ou módulos. Em aplicações mobile, eles verificam se partes específicas do código, como componentes React, produzem os resultados esperados. Características dos testes unitários incluem:

Isolamento: Os testes são realizados em unidades individuais, sem depender de outras partes da aplicação.

Rapidez de Execução: São ágeis, pois focam em unidades pequenas de código.

Detalhamento da Cobertura: Proporcionam uma cobertura mais detalhada do código.

Para utilizar os testes unitários você deve instalar as bibliotecas:
npm install jest
npm install jest-expo

e ajustar o package.json com as seguintes informações:

"scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "test": "jest"
  },
  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ]
  },

com o ambiente configurado basta executar o comando:
npm test

este teste independe do ambiente ao qual será executado.

# Testes End to End (E2E)
Os testes E2E simulam o fluxo completo de uma aplicação, desde a interação do usuário até a resposta do sistema. Em aplicações mobile, testam o aplicativo como um todo, garantindo que todas as partes se integrem corretamente. Principais características dos testes E2E:

Simulação de Fluxo Completo: Testam o aplicativo como um usuário real, percorrendo diferentes telas e funcionalidades.

Integrações Externas: Verificam a interação com serviços externos, como APIs e bancos de dados.

Cobertura Menos Detalhada: Oferecem uma cobertura menos detalhada do código, mas validam a integração do sistema como um todo.

Para utilizar os testes unitários você deve instalar o maestro:
 A instalação depende do seu sitema operacional e se encontra no link https://maestro.mobile.dev/getting-started/installing-maestro

com o ambiente configurado e o emulador basta executar os seguintes comandos:
maestro test -e EMAIL="teste" -e SENHA="123"  testLogout.yaml
maestro test -e EMAIL="teste" -e SENHA="123"  testLogin.yaml

este teste solicita o ambiente do emulador.
