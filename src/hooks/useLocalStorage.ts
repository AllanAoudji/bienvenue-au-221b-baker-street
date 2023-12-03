import { useEffect, useState } from "react"

const useLocalStorage: <T>(key: string, initialValue: T) => [state: T, setValue: (value: T) => boolean] = <T>(key: string, initialValue: any) => {
  const [state, setState] = useState(() => {
    // Initialize the state
    try {
        const value = window.localStorage.getItem(key);
        // Check if the local storage already has any values,
        // otherwise initialize it with the passed initialValue
        return value ? JSON.parse(value) : initialValue;
    } catch (error) {
        return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);

      return true;
    } catch (error) {
        return false;
    }
  }

  return [state, setValue]
}

export default useLocalStorage