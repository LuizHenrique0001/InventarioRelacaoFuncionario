import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from './entity/employee.entity';
import { Repository } from 'typeorm';
import { EmployeeDto, ReturnEmployee } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeEntity)
         private readonly employeeRepository: Repository<EmployeeEntity>
        ){}
    
    async create(employeeDto: EmployeeDto): Promise<void>{

         const userExist = await this.findByEmailForCreate(employeeDto.email)

        if(userExist){
            throw new NotFoundException(`Email Already Exists`)
        }

        await this.employeeRepository.create(employeeDto)
    } 

    async update(employeeId: number, employeeDto: EmployeeDto){

        const userExist = await this.findByEmailForCreate(employeeDto.email)

        if(userExist){
            throw new NotFoundException(`Email Already Exists`)
        }

        await this.employeeRepository.update(+employeeId, employeeDto)
    }

    async findByEmailForCreate(email:string){
        
        const userExist = await this.employeeRepository.findOne({where:{email:email}})
        if(!userExist){
            return false
        }
        return userExist
    }

    async find(): Promise<ReturnEmployee[]>{
        return (await this.employeeRepository.find()).map((EmployeeEntity)=> new ReturnEmployee(EmployeeEntity))
    }
}
