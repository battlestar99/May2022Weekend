package package1;

import java.util.Scanner;

public class celsiustToFar {

	public static void main(String[] args) {
		
		// program to convert celsius to farenhite 
		
//		double celsius = 20;
//		
//		double farenhite; 
		
//		double farenhite = (100*1.8)+32 ; 
//		
//		
//		System.out.println("Farenhite value:");
//		System.out.println(farenhite);
		
		System.out.println("Enter celcious value: ");
		
		Scanner sc = new Scanner(System.in);

		double celcious = sc.nextInt();
		
		double farenhite = (celcious*1.8)+32;
		
		System.out.println(farenhite);
		
		
		
		

	}

}
