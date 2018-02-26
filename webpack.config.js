var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true
   },
   debug: true,
   devtool: "#eval-source-map",
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
   }
}

module.exports = config;
