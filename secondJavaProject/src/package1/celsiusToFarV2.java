package package1;

import java.util.Scanner;

public class celsiusToFarV2 {

	public static void main(String[] args) {
		
		
		// program to convert celsius to farenhite
		
				Scanner sc = new Scanner (System.in);
		
				System.out.println("Enter Celsius value:   ");
				
				double celsius = sc.nextDouble() ; 
				
				double farenhite; 
				
				farenhite = (celsius*1.8)+32 ; 
				
				
				System.out.println("Farenhite value:");
				System.out.println(farenhite);
		
		
		
		
		
		

	}

}
