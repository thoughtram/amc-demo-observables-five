import {Observable, of} from 'rxjs';
import {flatMap} from 'rxjs/operators';

let myObservable = of(
  of(1, 2),
  of(3, 4),
  of(5, 6)
);

myObservable
  .pipe(
    flatMap(x => x)
  )
  .subscribe(
    val   => console.log(val),
    error => console.error(error),
    ()    => console.log('completed')
  );