import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum DataType {
    Quest = 'quests',
    Creature = 'creatures',
}

@Injectable({
    providedIn: 'root',
})
export class DataReaderService {
    constructor(private http: HttpClient) {}

    getData<T>(type: DataType): Observable<T> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.http.get<T>(`assets/data/${type}.json`);
    }
}
