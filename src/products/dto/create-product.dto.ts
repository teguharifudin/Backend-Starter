import { ApiHideProperty, ApiProperty } from "@nestjs/swagger"
import { IsString, IsNumber, IsNotEmpty, IsOptional, IsISO8601 } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;
  
    @ApiProperty({ format: 'binary' })
    @IsNotEmpty()
    file: string;

    @ApiProperty()
    @IsISO8601({ strict: true })
    @IsNotEmpty()
    @Type(() => Date)
    created: Date;

    @ApiProperty()
    @IsISO8601({ strict: true })
    @IsOptional()
    @Type(() => Date)
    updated: Date;

    @ApiHideProperty()
    @IsNumber()
    adminId: number;
  
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number;
  }
  