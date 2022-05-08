package carPayment;

import java.util.Scanner;

public class carPaymentV2 {

	public static void main(String[] args) {
		
		// creating necessay variables 
		
		Scanner sc = new Scanner(System.in);
		double basePrice;
		double downPayment; 
		double adminfee; 
		double tax; 
		int creditScore; 
		double apr; 
		int months; 
		double FinanceAmount; 
		
		// providing value to the variables 
		
		System.out.println("Enter the Price of the car: ");
		basePrice = sc.nextDouble(); 
		
		System.out.println("Enter the downpayment: ");
		downPayment = sc.nextDouble(); 
		
		System.out.println("Enter the Number of months for financing: ");
		months = sc.nextInt();
		
		adminfee = 800; 
		
		tax = 6 ; 
		
		double outOfDoorPricewithoutTax = basePrice + adminfee; 
		
		double totalTaxRequired = outOfDoorPricewithoutTax * (tax/100);
		
		System.out.println("Total Tax Required to Pay:");
		System.out.println(totalTaxRequired);
		
		double finalPrice = outOfDoorPricewithoutTax + totalTaxRequired;
		
		
		System.out.println("Out of the door price of the car:");
		System.out.println(finalPrice);
		
		
		FinanceAmount = finalPrice - downPayment; 
		
		System.out.println("Finance Amount: ");
		System.out.println(FinanceAmount);
		
		
		
		double monthlyPayment = FinanceAmount/months; 
		
		System.out.println("Monthly payment for your car will be: ");
		System.out.println(monthlyPayment);

	}

}
