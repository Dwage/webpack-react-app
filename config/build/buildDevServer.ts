import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions) {
  const { port } = options
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}
