package runBankAccount;

import bankAccount.bankAccount;

public class runBank {

	public static void main(String[] args) {
		
		
		// declaretion and initializtion
		bankAccount mike = new bankAccount("mike shcure");
		
		bankAccount jim; 
	
		jim=new bankAccount("Jim");
		
		
		System.out.println(mike.accountName);
		
		System.out.println(jim.accountName);
		
		bankAccount john = new bankAccount("dfa");
		
		mike.deposit();
		
		mike.deposit(12);
		
		bankAccount abc = new bankAccount();
		

	}

}
