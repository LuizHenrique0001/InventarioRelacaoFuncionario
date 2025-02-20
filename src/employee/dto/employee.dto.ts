import { IsEmail, IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";
import { EmployeeEntity } from "../entity/employee.entity";

export class EmployeeDto {
     @IsString()
     @IsNotEmpty()
     firstName: string

     @IsString()
     @IsNotEmpty()
     lastName: string

     @IsEmail()
     @IsNotEmpty()
     email: string

     @IsString()
     @IsNotEmpty()
     location: string

     @IsNumber()
     @Min(10)
     anydeskNumber: number
}

export class ReturnEmployee{

     firstName: string

     lastName: string

     email: string

     location: string

     anydeskNumber: number

     constructor(employeeEntity: EmployeeEntity){
          this.firstName = employeeEntity.firstName
          this.lastName = employeeEntity.lastName
          this.email = employeeEntity.email
          this.location = employeeEntity.location
          this.anydeskNumber = employeeEntity.anydeskNumber
     }
     
}