import { ApiModel, ApiModelProperty } from 'swagger-express-ts'
import { IDeveloper, IRevenue } from '../../domain/developers/types'

@ApiModel()
export class DeveloperDto implements IDeveloper {

	@ApiModelProperty()
	id: string

	@ApiModelProperty()
	firstName?: string

	@ApiModelProperty()
	lastName?: string

	@ApiModelProperty()
	email: string


}

@ApiModel()
export class DeveloperWithRevenueDto implements IDeveloper, IRevenue {

	@ApiModelProperty()
	id: string

	@ApiModelProperty()
	firstName?: string

	@ApiModelProperty()
	lastName?: string

	@ApiModelProperty()
	email: string

	@ApiModelProperty()
	revenue?: number
}
