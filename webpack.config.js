// const HtmlWebpackPlugin = require('html-webpack-plugin') /* Se exporta el plugin de HTML que se acaba de instalar */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  /* El output de la compilación va a estar en el archivo: */
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }) /* De esta forma utilizamos la instancia de este plugin  */
  ],
  module: {
    /* Reglas que queremos que tengan nuestros módulos */
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
