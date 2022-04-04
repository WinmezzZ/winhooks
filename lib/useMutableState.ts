import { useState } from 'react';

type Obj = {
  [x: string | symbol]: any;
};

export default function useMutableState<T extends Obj = Obj>(initialState?: T): T {
  const [state, setState] = useState(initialState || ({} as T));
  const p = new Proxy(state, {
    get(target, key) {
      return target[key];
    },
    set(target, key, value) {
      setState(s => {
        return {
          ...s,
          [key]: value,
        };
      });

      return Reflect.set(target, key, value);
    },
  });

  return p;
}
