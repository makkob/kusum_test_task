export interface Transaction {
    id?: string; 
    type: 'income' | 'expense';  
    amount: number | null;  
    category: string;  
    date: Date;  
  }
  