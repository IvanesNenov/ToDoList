import {  makeAutoObservable, } from 'mobx'
import uniqid from 'uniqid'

export interface ITask {
	 id: string;
	 title: string;
	 complete: boolean;
}


export class Task implements ITask{
		id
		title
		complete

		constructor(title:string) {
			makeAutoObservable(this)
			this.id= uniqid()
			this.complete = false
			this.title = title

		}



}