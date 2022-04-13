import { useState, useEffect } from 'react';

enum PREFERENCES {
  DARK = 'dark',
  LIGHT = 'light',
  NONE = 'light',
}

export const values = [PREFERENCES.DARK, PREFERENCES.LIGHT, PREFERENCES.NONE];

export type Color = 'dark' | 'light';

export const makeQuery = (pref: Color) => `(prefers-color-scheme: ${pref})`;

export const getPreference = (preferences: Color[]) =>
  preferences
    .map(value => ({
      preference: value,
      matchMedia: typeof window !== 'undefined' ? window.matchMedia(makeQuery(value)) : [],
    }))
    .filter(pref => pref.matchMedia instanceof MediaQueryList && pref.matchMedia.matches)[0];

export const attachListener = (pref: any, setScheme: any) => {
  let unbind: any;
  const listener = () => {
    const newPref = getPreference(values);

    setScheme(newPref.preference);
    pref.matchMedia.removeListener(listener);

    unbind = attachListener(newPref, setScheme);
  };

  pref.matchMedia.addListener(listener);

  return () => {
    if (unbind) {
      unbind();
    } else {
      pref.matchMedia.removeListener(listener);
    }
  };
};

const initialPreference = getPreference(values);

export default function useColorScheme() {
  if (typeof window === 'undefined') {
    return PREFERENCES.NONE;
  }

  if (!('matchMedia' in window)) {
    return PREFERENCES.NONE;
  }
  const [scheme, setScheme] = useState(initialPreference ? initialPreference.preference : PREFERENCES.NONE);

  useEffect(() => {
    if (!initialPreference) return;

    return attachListener(initialPreference, setScheme);
  }, []);

  return scheme;
}
