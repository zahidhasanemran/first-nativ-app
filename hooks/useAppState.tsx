import {useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';

type onChangeType = (status: AppStateStatus) => void;

export function useAppState(onChange: onChangeType) {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onChange);
    return () => {
      subscription.remove();
    };
  }, [onChange]);
}
