import { API } from './../utils';

export const getIngredients = () => {
  return fetch(`${API}/ingredients`).then(
    response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(Error('error'));
      }
    },
    error => Promise.reject(Error(error))
  );
};

export const deleteIngredient = id => {
  return fetch(`${API}/ingredients/${id}`, { method: 'DELETE' }).then(
    response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(Error('error'));
      }
    },
    error => Promise.reject(Error(error))
  );
};
