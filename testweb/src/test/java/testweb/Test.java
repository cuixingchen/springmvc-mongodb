package testweb;

public class Test {

	public static void main(String[] args) {
		String str1 = "aaa";
		String str2 = "bbb";
		String str3 = "aaabbb";

		String str4 = "aaa" + "bbb";//不会产生新的字符串对象
		System.out.println(str3 == str4);//true

		str4 = str1 + "bbb";//会产生新的字符串对象
		System.out.println(str3 == str4);//false
		System.out.println(str3);//false
		System.out.println(str4);//false

		str4 = str1 + str2;//会产生新的字符串对象
		System.out.println(str3 == str4);//false

	}

}
