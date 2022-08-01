import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseModel } from "../definitions/base.model";

export abstract class BaseService<T extends BaseModel> {
	public apiUrl: string;

	constructor(
		public http: HttpClient,
	) {
		if (!environment.apiUrl) throw new Error('apiUrl is not defined');
		if (!environment.apiKey) throw new Error('apiKey is not defined');

		this.apiUrl = environment.apiUrl;
	}

	getAll(): Observable<T[]> {
		return this.http.get<T[]>(`${this.apiUrl}`);
	}

	getById(t: T): Observable<T> {
		return this.http.get<T>(`${this.apiUrl}/${t.id}`);
	}

	create(t: T): Observable<T> {
		return this.http.post<T>(`${this.apiUrl}`, { body: t });
	}

	edit(t: T): Observable<T> {
		return this.http.put<T>(`${this.apiUrl}`, { body: t });
	}

	delete(t: T): Observable<T> {
		return this.http.delete<T>(`${this.apiUrl}/${t.id}`);
	}
}
