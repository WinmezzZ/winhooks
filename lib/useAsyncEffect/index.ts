import { useEffect } from 'react';

type Effect = () => Promise<void | (() => void)>;

type Deps = Readonly<Array<any>>;

export default function useAsyncEffect(effect: Effect, deps?: Deps) {
  useEffect(() => {
    effect();
  }, deps);
}
