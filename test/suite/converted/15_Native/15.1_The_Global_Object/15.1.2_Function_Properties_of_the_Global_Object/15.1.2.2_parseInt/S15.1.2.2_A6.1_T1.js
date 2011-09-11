// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If S contains any character that is not a radix-R digit,
 * then let Z be the substring of S consisting of all characters before
 * the first such character; otherwise, let Z be S
 *
 * @section: 15.1.2.2;
 * @path: 15_Native/15.1_The_Global_Object/15.1.2_Function_Properties_of_the_Global_Object/15.1.2.2_parseInt/S15.1.2.2_A6.1_T1.js;
 * @description: Complex test. R in [2, 36];
 */

//CHECK#
for (var i = 2; i <= 36; i++) {
  if (parseInt("10$1", i) !== i) {
    $ERROR('#' + i +': i = ' + i + 'parseInt("10$1", i) === i. Actual: ' + (parseInt("10$1", i)));
  }
}    
