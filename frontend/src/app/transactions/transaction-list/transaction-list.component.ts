import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.sass'],
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  balance: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
      this.calculateBalance();
    });
  }

  calculateBalance() {
    this.balance = this.transactions.reduce((acc, transaction) => {
      const amount = Number(transaction.amount) || 0; 
      return transaction.type === 'income' ? acc + amount : acc - amount;
    }, 0);
  }
  

  onDelete(id: string) {
      this.transactionService.deleteTransaction(id).subscribe(() => {
        this.getTransactions();
      });
    
  }
}
