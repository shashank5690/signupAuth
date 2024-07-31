import { ofType } from 'redux-observable';
import { catchError, mergeMap } from 'rxjs/operators';
import { of, Observable, from } from 'rxjs'; 
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure, ImageActions } from './imageSlice'; // Update path if necessary
import { fetchImagesFromApi } from '../../ScreenHome/utils/Services/apiFetch'; 
import { ImageHits } from '../utils/type/ImageState';


// types of the action from the slice you are using this epic as directed
export const imageEpic = (action$: Observable<ImageActions>) =>
  action$.pipe(
    ofType(fetchImagesRequest.type),
    mergeMap(() =>
      from(fetchImagesFromApi()).pipe( 
        mergeMap((hits: ImageHits[]) => 
          of(fetchImagesSuccess(hits)) // create an Observable
        ),
        catchError((error: Error) =>
          of(fetchImagesFailure(error.message)) 
        )
      )
    )
  );
