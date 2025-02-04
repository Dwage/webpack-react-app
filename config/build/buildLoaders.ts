import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            namedExport: false,
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }

  const svgrLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
      },
    ],
  }

  const imageLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[name][hash][ext][query]',
    },
  }

  return [typescriptLoader, cssLoader, svgrLoader, imageLoader]
}
