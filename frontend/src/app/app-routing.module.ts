import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transactions/add', component: TransactionFormComponent },
  { path: '', redirectTo: '/transactions', pathMatch: 'full' },
  { path: '**', redirectTo: '/transactions' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
