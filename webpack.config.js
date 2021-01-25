const path = require("path")


module.exports = {
    entry: {
        index: './src/index.js',     //mapeia a entrada e retorna um arquivo com msm nome
        galaxy: './src/galaxy.js'
    },

    output: {
        filename: '[name].bundle.js',           //pega a entrada e cria um arquivo nesse padrao
        path: path.join(__dirname, dist),       //coloca dentro de dist
        
    }
}