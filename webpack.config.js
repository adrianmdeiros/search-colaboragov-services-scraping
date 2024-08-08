const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',  // Indica que o Webpack deve ser configurado para Node.js
  entry: './server.js',  // Caminho para o arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),  // Caminho para o diretório de saída
    filename: 'server.js',  // Nome do arquivo de saída
  },
  externals: [nodeExternals()],  // Para evitar incluir módulos do Node.js no bundle
};
