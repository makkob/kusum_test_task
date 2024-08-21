import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.sass']
})
export class TransactionFormComponent {
  transaction: Transaction = {
    type: 'income',
    amount: null,
    category: '',
    date: new Date()
  };

  constructor(private transactionService: TransactionService) {}

  onSubmit() {
    this.transactionService.addTransaction(this.transaction).subscribe(response => {
      console.log('Transaction added successfully', response);
    });
  }
}
