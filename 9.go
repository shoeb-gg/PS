//https://leetcode.com/problems/palindrome-number/

package main

import (
	"strconv"
)
  

func main() {
	isPalindrome(-66)
}
  

func isPalindrome(x int) bool {
	str := strconv.Itoa(x)

	if(len(str) == 0){
		return false
	}else if(x < 0){
		return false
	}else if(len(str) == 1){
		return true
	}else{		
		for i := 0; i < len(str)/2; i++ {

			if( string(str[i]) != string(str[len(str) - (i+1)]) ){
				return false
			}

		}
		return true;
	}
}