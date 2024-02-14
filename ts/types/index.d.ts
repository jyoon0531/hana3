declare global {
  interface Window {
    gName: string;
  } // window.gName

  interface Array<T> {
    first(): T;
  }
}

type X = string | number;
