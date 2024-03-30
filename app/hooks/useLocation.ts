import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

const useLocation = () => {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState<Location>();

  const pickLocation = async () => {
    try {
      if (!status?.granted) {
        await requestPermission();
      }
      const result = await Location.getLastKnownPositionAsync();
      if (result) {
        const { latitude, longitude } = result.coords;
        setLocation({ latitude, longitude });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pickLocation();
  }, []);

  return { location };
};

export default useLocation;
