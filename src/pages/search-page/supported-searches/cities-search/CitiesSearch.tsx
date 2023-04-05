import { ChangeEvent, useState } from 'react';

import { RESTAURANTS_PAGE } from '../../../../routes/pages';
import { LOCAL_STORAGE_SAVED_CITY_KEY } from '../../constants';
import { supportedCities } from '../../data';
import { SearchWithList } from '../../search-with-list';

export const CitiesSearch = () => {
  const [cities, setCities] = useState<string[]>([]);

  const onSearchCities = (event: ChangeEvent<HTMLInputElement>) => {
    const foundCities = supportedCities.filter(cityName =>
      cityName.includes(event.target.value)
    );
    setCities(foundCities);
  };

  const onCityClick = (cityName: string) => {
    localStorage.setItem(LOCAL_STORAGE_SAVED_CITY_KEY, cityName);
  };

  return (
    <SearchWithList
      entities={cities}
      onChange={onSearchCities}
      entityLinkTarget={RESTAURANTS_PAGE}
      onEntityClick={onCityClick}
    />
  );
};
