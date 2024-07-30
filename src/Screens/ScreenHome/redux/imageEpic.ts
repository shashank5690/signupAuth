import { ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import axios from 'axios';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure } from './imageSlice'; // Update path if necessary

// Epic
export const imageEpic = (action$: any) =>
  action$.pipe(
    ofType(fetchImagesRequest.type), // Using the action creator's type
    mergeMap(() =>
      axios.get('https://pixabay.com/api/', {
        params: {
          key: '45184610-df12da5fdfb2eb6fd3849e98a',
          q: 'Gradient',
          image_type: 'photo',
          per_page: 20,
        },
      }).then(response => fetchImagesSuccess(response.data.hits))
        .catch(error => of(fetchImagesFailure('Error fetching images.')))
    ),
    catchError(error => of(fetchImagesFailure('Error fetching images.')))
  );
