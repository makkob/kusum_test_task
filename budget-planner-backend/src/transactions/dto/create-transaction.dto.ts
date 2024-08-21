
import { IsNotEmpty, IsNumber, IsString, IsEnum, IsDateString } from 'class-validator';

export class CreateTransactionDto {
  @IsEnum(['income', 'expense'])
  @IsNotEmpty()
  type: 'income' | 'expense';

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsDateString()
  @IsNotEmpty()
  date: Date;
}
