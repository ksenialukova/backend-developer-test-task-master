// **************************************************************************
// Репозиторій імітує шар підключення до бази данних. Данні знаходяться в data.ts
// **************************************************************************

import { injectable } from 'inversify';
import { IDeveloper, IRevenue } from '../types'
import { contracts, developers } from './data'

@injectable()
export class DevelopersRepository {

	async getDevelopers(): Promise<IDeveloper[]>{
		return developers
	}

	async getDevelopersWithRevenues(): Promise<(IDeveloper & IRevenue)[]>{
		return developers.map((d) => {
			const revenue = contracts.reduce((acc, c) => c.developerId === d.id && c.status === 'completed'? acc + c.amount : acc, 0)
			return {...d, revenue}
		})
	}

	async getDeveloperById(id: string): Promise<IDeveloper>{
		return developers.find(d => d.id === id)
	}

	async getContracts(){
		return contracts
	}

}
