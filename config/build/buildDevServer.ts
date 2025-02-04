import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions) {
  const { paths, port } = options
  return {
    // static: {
    //   directory: paths.build,
    // },
    //compress: true,
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}
