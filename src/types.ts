// 何故かエラー吐かれるので定義
export type AsyncPage<T = unknown> = (arg0: T) => Promise<React.JSX.Element>;
