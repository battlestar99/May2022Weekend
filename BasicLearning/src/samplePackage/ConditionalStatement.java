package samplePackage;

import java.util.Scanner;

public class ConditionalStatement {

	public static void main(String[] args) {
		
//		int numberOne = 10;
//		int numberTwo = 20;
//			//10     <    20
//		if(numberOne <= numberTwo) {
//			System.out.println("test pass");
//		}else {
//			System.out.println("test fail");
//		}
		
		
		

//		String trafficLight = "yellow";
//		
//		if(trafficLight == "red") {
//			System.out.println("Full stop");
//		}else if(trafficLight == "green"){
//			System.out.println("go");
//		}else if(trafficLight == "yellow") {
//			System.out.println("yeild");
//		}else {
//			System.out.println("another");
//		}
//		
		
		
		
		
		
		
		// if a student gets 90 to 100 then grade should A
		// if a student gets 80 to 89 then grade should B
		// if a student gets 70 to 79 then grade should C
		// if a student gets 60 to 69 then grade should D
		// if a student gets less then  60 grade should Fail
//		System.out.println("Enter mark..");
//		
//		Scanner sc = new Scanner(System.in);
//		
//		int mark = sc.nextInt();
//		
//		if(mark >= 90 && mark <= 100) {
//			System.out.println("A");
//		}else if(mark >= 80 && mark <= 89) {
//			System.out.println("B");
//		}else if(mark >= 70 && mark <= 79) {
//			System.out.println("C");
//		}else if(mark >= 60 && mark <= 69) {
//			System.out.println("D");
//		}else if(mark >= 0 && mark <= 59) {
//			System.out.println("Fail");
//		}else {
//			System.out.println("Invalid input");
//		}
//		
		
		
//		int creditScore = 600;
//		
//		if(creditScore >= 840) {
//			1%;
//		}
			
		double apr = 5;
		int creditScore = 300;
		
		if(creditScore>=700) {
			apr = 0.01; // 1% -  1/100 - 0.01
		}else if(creditScore >= 600) {
			apr = 0.02;
		}else if(creditScore >= 500) {
			apr = 0.03;
		}
		
		System.out.println(apr);
		
		
		
		
		
	
	
	}

}
