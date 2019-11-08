/* 
 * CS:APP Data Lab 
 * 
 * Justin Chen
 * 
 * bits.c - Source file with your solutions to the Lab.
 *          This is the file you will hand in to your instructor.
 *
 * WARNING: Do not include the <stdio.h> header; it confuses the dlc
 * compiler. You can still use printf for debugging without including
 * <stdio.h>, although you might get a compiler warning. In general,
 * it's not good practice to ignore compiler warnings, but in this
 * case it's OK.  
 */

#if 0
/*
 * Instructions to Students:
 *
 * STEP 1: Read the following instructions carefully.
 */

You will provide your solution to the Data Lab by
editing the collection of functions in this source file.

INTEGER CODING RULES:
 
  Replace the "return" statement in each function with one
  or more lines of C code that implements the function. Your code 
  must conform to the following style:
 
  int Funct(arg1, arg2, ...) {
      /* brief description of how your implementation works */
      int var1 = Expr1;
      ...
      int varM = ExprM;

      varJ = ExprJ;
      ...
      varN = ExprN;
      return ExprR;
  }

  Each "Expr" is an expression using ONLY the following:
  1. Integer constants 0 through 255 (0xFF), inclusive. You are
      not allowed to use big constants such as 0xffffffff.
  2. Function arguments and local variables (no global variables).
  3. Unary integer operations ! ~
  4. Binary integer operations & ^ | + << >>
    
  Some of the problems restrict the set of allowed operators even further.
  Each "Expr" may consist of multiple operators. You are not restricted to
  one operator per line.

  You are expressly forbidden to:
  1. Use any control constructs such as if, do, while, for, switch, etc.
  2. Define or use any macros.
  3. Define any additional functions in this file.
  4. Call any functions.
  5. Use any other operations, such as &&, ||, -, or ?:
  6. Use any form of casting.
  7. Use any data type other than int.  This implies that you
     cannot use arrays, structs, or unions.

 
  You may assume that your machine:
  1. Uses 2s complement, 32-bit representations of integers.
  2. Performs right shifts arithmetically.
  3. Has unpredictable behavior when shifting an integer by more
     than the word size.

EXAMPLES OF ACCEPTABLE CODING STYLE:
  /*
   * pow2plus1 - returns 2^x + 1, where 0 <= x <= 31
   */
  int pow2plus1(int x) {
     /* exploit ability of shifts to compute powers of 2 */
     return (1 << x) + 1;
  }

  /*
   * pow2plus4 - returns 2^x + 4, where 0 <= x <= 31
   */
  int pow2plus4(int x) {
     /* exploit ability of shifts to compute powers of 2 */
     int result = (1 << x);
     result += 4;
     return result;
  }

FLOATING POINT CODING RULES

For the problems that require you to implent floating-point operations,
the coding rules are less strict.  You are allowed to use looping and
conditional control.  You are allowed to use both ints and unsigneds.
You can use arbitrary integer and unsigned constants.

You are expressly forbidden to:
  1. Define or use any macros.
  2. Define any additional functions in this file.
  3. Call any functions.
  4. Use any form of casting.
  5. Use any data type other than int or unsigned.  This means that you
     cannot use arrays, structs, or unions.
  6. Use any floating point data types, operations, or constants.


NOTES:
  1. Use the dlc (data lab checker) compiler (described in the handout) to 
     check the legality of your solutions.
  2. Each function has a maximum number of operators (! ~ & ^ | + << >>)
     that you are allowed to use for your implementation of the function. 
     The max operator count is checked by dlc. Note that '=' is not 
     counted; you may use as many of these as you want without penalty.
  3. Use the btest test harness to check your functions for correctness.
  4. Use the BDD checker to formally verify your functions
  5. The maximum number of ops for each function is given in the
     header comment for each function. If there are any inconsistencies 
     between the maximum ops in the writeup and in this file, consider
     this file the authoritative source.

/*
 * STEP 2: Modify the following functions according the coding rules.
 * 
 *   IMPORTANT. TO AVOID GRADING SURPRISES:
 *   1. Use the dlc compiler to check that your solutions conform
 *      to the coding rules.
 *   2. Use the BDD checker to formally verify that your solutions produce 
 *      the correct answers.
 */


#endif
/* Copyright (C) 1991-2016 Free Software Foundation, Inc.
   This file is part of the GNU C Library.

   The GNU C Library is free software; you can redistribute it and/or
   modify it under the terms of the GNU Lesser General Public
   License as published by the Free Software Foundation; either
   version 2.1 of the License, or (at your option) any later version.

   The GNU C Library is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
   Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public
   License along with the GNU C Library; if not, see
   <http://www.gnu.org/licenses/>.  */
/* This header is separate from features.h so that the compiler can
   include it implicitly at the start of every compilation.  It must
   not itself include <features.h> or any other header that includes
   <features.h> because the implicit include comes before any feature
   test macros that may be defined in a source file before it first
   explicitly includes a system header.  GCC knows the name of this
   header in order to preinclude it.  */
/* glibc's intent is to support the IEC 559 math functionality, real
   and complex.  If the GCC (4.9 and later) predefined macros
   specifying compiler intent are available, use them to determine
   whether the overall intent is to support these features; otherwise,
   presume an older compiler has intent to support these features and
   define these macros by default.  */
/* wchar_t uses Unicode 8.0.0.  Version 8.0 of the Unicode Standard is
   synchronized with ISO/IEC 10646:2014, plus Amendment 1 (published
   2015-05-15).  */
/* We do not support C11 <threads.h>.  */
/* 
 * bitAnd - x&y using only ~ and | 
 *   Example: bitAnd(6, 5) = 4
 *   Legal ops: ~ |
 *   Max ops: 8
 *   Rating: 1
 */
int bitAnd(int x, int y) {
         //double negation property then distribute ~ ~(x|y)=~(~x & ~y) 
  return ~(~x|~y); //demorgan's law
}
/* 
 * getByte - Extract byte n from word x
 *   Bytes numbered from 0 (LSB) to 3 (MSB)
 *   Examples: getByte(0x12345678,1) = 0x56
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 6
 *   Rating: 2
 */ 
int getByte(int x, int n) {
    //masking & with 0x00000FF(32 bits) leaves only the last 8 bits, 8 bits = 1 byte
    //then shift 24, 16, 8, or 0 times ie n<<3 times based on whether in 0 byte position, 1 byte position, etc
    //(multiply by 2^3, ie 0 or 8 or 16 or 24) 
  return 0xFF & (x>>(n<<3));
}
/* 
 * logicalShift - shift x to the right by n, using a logical shift
 *   Can assume that 0 <= n <= 31
 *   Examples: logicalShift(0x87654321,4) = 0x08765432
 *   Legal ops: ~ & ^ | + << >>
 *   Max ops: 20
 *   Rating: 3 
 */
int logicalShift(int x, int n) {
    int arithmetic = x>>n; //right shift by default is arithmetic shift, correct if postitive num or zero
    int mask = (1<<31) >> n; //guarentees a mask of n number of 1s followed by zeroes
    mask <<= 1; //left shift the mask by 1 since masking begins one bit before the actual number
    return arithmetic & ~mask; //by inverting the mask, the beginning becomes n-1 0s and the AND cancels it all out
}
/*
 * bitCount - returns count of number of 1's in word
 *   Examples: bitCount(5) = 2, bitCount(7) = 3
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 40
 *   Rating: 4
 */
int bitCount(int x) {
    //create mask and try to group numbers. How to get 32 bit mask using 8 bit mask?
    //0x11|(0x11<<24)|(0x11<<16)|(0x11<<8) = 0x11111111
    int mask1 = 0x11|(0x11<<24)|(0x11<<16)|(0x11<<8); //equal to 0x11111111 to mask all but the last bit of every 4 bits
    int mask2;
    int sum = x & mask1; //initial first bit check if one for every 4 bits in the number
    int altSum;
    sum += (x>>1) & mask1; //right shift down one 3 times to account for every single bit in the 4 bits
    sum += (x>>2) & mask1; 
    sum += (x>>3) & mask1;
    sum += sum >> 16; //at this point all of the 1s in the first 4 bits are accounted for but the rest needs to be   
                        //combined due to the extra 1s past the first 4 bits. right shift down 2 bytes and add for  
                        //updated value 
    mask2 = 0xF|(0xF << 8); //Equal to 0xF0F, to keep the sum after initial count and 
                                //continue masking in the next byte
    altSum = sum & mask2; //Apply alternating mask, which stores the original sum and gets the sum from the second half 
                            //of the byte
    sum = altSum + ((sum>>4) & mask2); //Combine with the unaccounted for other alternating sums of 1s 
                                        //and then add together
    return (sum + (sum>>8)) & 0x3F; //combine the 2 bytes of sums together and mask with 0011 1111 since the max
                                    //number of possible 1s is 32 all other numbers are irrelevant past this point
}
/* 
 * bang - Compute !x without using !
 *   Examples: bang(3) = 0, bang(0) = 1
 *   Legal ops: ~ & ^ | + << >>
 *   Max ops: 12
 *   Rating: 4 
 */
int bang(int x) {
    //0 is the only number whose sign bits for both positive and negative number is same
    int zeroCheck = (~x + 1) | x; //will be 32 bits of 1s or 32 bits of 0s if x is 0
	int sign = (zeroCheck>>31) + 1; //right shift all the way to the right end to see the sign of x
                                    //By adding one, it will convert the 32 0s for 0 to a 1 and the 
                                    //32 1s for all other numbers to 0 by overflow
	return sign; 
}
/* 
 * tmin - return minimum two's complement integer 
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 4
 *   Rating: 1
 */
int tmin(void) {
    //smallest number in signed 32 bit is 1followed by 31 0's ie 100000... or 0x80000000
  return 1<<31; //leftshift 31 spaces
}
/* 
 * fitsBits - return 1 if x can be represented as an 
 *  n-bit, two's complement integer.
 *   1 <= n <= 32
 *   Examples: fitsBits(5,3) = 0, fitsBits(-4,3) = 1
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 15
 *   Rating: 2
 */
int fitsBits(int x, int n) {
    int shift = 32 + (~n+1); //32 - n
    int leftShift = x<<shift; //left shift x by 32-n
    int rightShift = leftShift>>shift; //right shift that shifted value by 32-n
    return !(x^rightShift); //Check if the original is equal to the version after shifting to the left then right
                            //!(x^y) is the same as x==y, then return true or false
}
/* 
 * divpwr2 - Compute x/(2^n), for 0 <= n <= 30
 *  Round toward zero
 *   Examples: divpwr2(15,1) = 7, divpwr2(-33,4) = -2
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 15
 *   Rating: 2
 */
int divpwr2(int x, int n) {
    //Need to account for right shift of n if positive or right shift of n+1 when negative
    int account = (1<<n) + ~0; //negative bias of 2^n-1 and positive of 0
                            //By subtracting 1 from 2^n it accounts for the issue of needing to add one when negative
    int sign = x>>31; //Gets the sign of the num, 32 0s if postive or 32 1s if negative due to arithmetic right shift
    int num = account & sign; //bias, but only if negative
    return (num + x) >> n; //By definition of right shift will divide by 2^n
}
/* 
 * negate - return -x 
 *   Example: negate(1) = -1.
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 5
 *   Rating: 2
 */
int negate(int x) {
  return ~x+1; //invert + 1 will create the opposite of any 2s comp number
}
/* 
 * isPositive - return 1 if x > 0, return 0 otherwise 
 *   Example: isPositive(-1) = 0.
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 8
 *   Rating: 3
 */
int isPositive(int x) {
    int checkZero = !x; //!x for any number but 0 is equal to 1
    int sign = !(x>>31); //!(x>>31) for all negatives is 0
    return checkZero ^ sign; //XOR relationship, all positives will have 0^1 and all negatives and zero will have 1^1 
                            //or 0^0
}
/* 
 * isLessOrEqual - if x <= y  then return 1, else return 0 
 *   Example: isLessOrEqual(4,5) = 1.
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 24
 *   Rating: 3
 */
int isLessOrEqual(int x, int y) {
    int xSign = x>>31 & 1; //Get the sign of x and y, then AND with 1 to get just 0 or 1 for positive or negative
    int ySign = y>>31 & 1;
    int difference = y + (~x+1); //Get the difference between y and x (y-x)
    int differenceSign = difference>>31 & 1; //Get sign of the difference, in the same fashion as x and y
    //If x is negative and y is positive, then it must be less
    //If both x and y are the same sign and 
    return (xSign & !ySign) | (!(xSign^ySign) & !differenceSign);
}
/*
 * extra credit
 */
/*
 * ilog2 - return floor(log base 2 of x), where x > 0
 *   Example: ilog2(16) = 4
 *   Legal ops: ! ~ & ^ | + << >>
 *   Max ops: 90
 *   Rating: 4
 */
int ilog2(int x) {
    int count = 0;
    int temp = 0;
    //find highest bit by checking all 4 bytes
    temp = x>>8; 
    count += ((!!temp)<<3); //bang bang to ensure either 0 or 1 then add increments of 8 to count
    temp = x>>16;
    count += ((!!temp)<<3);
    temp = (x>>24);
    count += ((!!temp)<<3);

    x >>= count; //at this point count will be 0, 8, 16, or 24 and 
                //we just need to account for the extra possible up to 8 bits
    x >>= 1;
    count += !!x;
    x >>= 1;
    count += !!x;
    x >>= 1;
    count += !!x;
    x >>= 1;
    count += !!x;
    x >>= 1;
    count += !!x;
    x >>= 1;
    count += !!x;
    x >>= 1;
    count += !!x;
    x >>= 1;
    count += !!x;
    return count;
}
/* 
 * float_neg - Return bit-level equivalent of expression -f for
 *   floating point argument f.
 *   Both the argument and result are passed as unsigned int's, but
 *   they are to be interpreted as the bit-level representations of
 *   single-precision floating point values.
 *   When argument is NaN, return argument.
 *   Legal ops: Any integer/unsigned operations incl. ||, &&. also if, while
 *   Max ops: 10
 *   Rating: 2
 */
unsigned float_neg(unsigned uf) {
 return 2;
}
/* 
 * float_i2f - Return bit-level equivalent of expression (float) x
 *   Result is returned as unsigned int, but
 *   it is to be interpreted as the bit-level representation of a
 *   single-precision floating point values.
 *   Legal ops: Any integer/unsigned operations incl. ||, &&. also if, while
 *   Max ops: 30
 *   Rating: 4
 */
unsigned float_i2f(int x) {
  return 2;
}
/* 
 * float_twice - Return bit-level equivalent of expression 2*f for
 *   floating point argument f.
 *   Both the argument and result are passed as unsigned int's, but
 *   they are to be interpreted as the bit-level representation of
 *   single-precision floating point values.
 *   When argument is NaN, return argument
 *   Legal ops: Any integer/unsigned operations incl. ||, &&. also if, while
 *   Max ops: 30
 *   Rating: 4
 */
unsigned float_twice(unsigned uf) {
  return 2;
}
