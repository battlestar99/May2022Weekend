package bankAccount;

public class bankAccount {
	
	// properties of the class
	public String accountName; 
	public String email; 
	public String state; 
	public String password; 
	public int amountOfMoney; 
	
	
	
	static int numberofUsers; 
	
	
	
	 public bankAccount() {
	 
	 System.out.println("an object is created");
	  
	  }
	
	
	
	public bankAccount(String x) {
		
		accountName=x; 
		 System.out.println("a string constructor");
		
	}
	
	public bankAccount(int x) {
		
		 System.out.println("an integer constructor");
		
		
	}
	
	
	 public void getUserdata() {
		
		System.out.println("method of getting user data");
		
		
	}
	
	
	
	
	
	
	
	public static void resetUseraccount() {
		
		
		
		
		
	}
	
	
	
	
	public void deposit() {
		
		System.out.println(accountName);
		System.out.println("Depositing money");
		
		getUserdata();
	}
	
	
	public void deposit(int x) {
		
		
		System.out.println("Depositing money in another method");
	
	}
	
	
  public void withdraw() {
		
	    System.out.println(accountName);
		System.out.println("withdrawing money");
		
		
	}
  
  public void updateAccount() {
		
	    System.out.println(accountName);
		System.out.println("withdrawing money");
		
		
	}
	
	

}
