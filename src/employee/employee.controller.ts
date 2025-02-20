import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/employee.dto';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}

    @UsePipes(ValidationPipe)
    @Post()
    async create(@Body() employeeDto: EmployeeDto){
         
         return await this.employeeService.create(employeeDto)
    }

    @Put(':id')
    async update(@Param() employeeId: number, @Body() employeeDto: EmployeeDto){

        return await this.update(employeeId, employeeDto)
    }

    @Get()
    async find(){

        return await this.employeeService.find()
    }
}
