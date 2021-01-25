const path = require("path")


module.exports = {
    entry: {
        index: './src/index.js',     //mapeia a entrada e retorna um arquivo com msm nome
        galaxy: './src/galaxy.js'
    },

    output: {
        filename: '[name].bundle.js',           //pega a entrada e cria um arquivo nesse padrao
        path: path.join(__dirname, 'dist'),       //coloca dentro de dist  
    },

    module: {
        rules: [
            {
                test: /\.js$/,                   //todos arquivos que terminam com .js 
                use: ['babel-loader']            // vao utilizar o babel
            }
        ]
    },

    watch: true,                                     //vai procurar por qlq alteração nos arquivos e qnd achar executa o webpack novamente (dist)

    devServer : {
        contentBase: path.join(__dirname, 'dist'),  //o servidor vai monitorar a pasta dist e qnd encontrar alteração ele recarrega o browser
        watchContentBase: true,
        liveReload: true
    }
}