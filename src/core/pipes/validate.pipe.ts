import { ArgumentMetadata, BadRequestException, Injectable, UnprocessableEntityException, ValidationPipe } from "@nestjs/common";

@Injectable()
export class ValidateInputPipe extends ValidationPipe{
    public async transform(value, metadata: ArgumentMetadata){
        try{
            return await super.transform(value, metadata);
        }catch(e){
            if(e instanceof BadRequestException){
                throw new UnprocessableEntityException(this.handleErrors(e.getResponse()['message'])); 
            }
        }
    }

    private handleErrors(errors : any[]){
        return errors.map(error => error)
    }
}