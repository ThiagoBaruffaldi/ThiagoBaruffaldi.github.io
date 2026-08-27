---
title: "Imperative Programming Paradigm"
date: 2026-08-26
threads: [ "aprendizado"]
summary: "A little study session about Imperative Programming"
---

Imperative Programming is the first programming paradigm that is studied in college, even if it's never mentioned by this term. You'll recognize it by the programming languages that are created from it —[^1] C, Perl, JavaScript, etc — due to their simplicity and "direct" way of writing instructions: copying the imperative mood in natural languages ("_do this_", or "_do that in this order_"), telling the computer what (and **how**) to do, step by step, using variables, and **altering the state of the process** while executing. 

See below the details for each of the mentioned characteristics.

## Exempli gratia

Most of what I described above becomes clearer when using an example in C.

```c
int a = 0, b = 5, i;      //Define 'a' as 0, 'b' as   5, and 'i' stays uninitialized

for(i = 0; i < b; i++){   //Define 'i' as 0, and while its value is lower than the value of 'b', execute the block of code below and add 1 to 'i' value
	if(i == 2){           //If 'i' equals 2, execute the block of code below
		printf("%d", i);  // Print in the terminal the value of 'i'
	}
	else a++;             //If the value isn't equal to 2, add 1 to 'a' value
}
```


See how the whole code block, based on the comments of each line, is really inspired by the imperative mood? Beyond that, observe how the **order** of commands is really specific.

Furthermore, both the `for` loop and `else` statement lines are examples of altering the state of the process while executing it — the value of 'i' and 'a' changes constantly in the memory, so the computer never repeats its processes in the same way as before. 

---
[^1]: No AI was used in the writing of this post, I just really like using dashes.

## References

* Sebesta, R. W. (2018). *Concepts of programming languages* (12th ed.). Pearson.
* Imperative programming. (2026, August 15). In *Wikipedia*. https://en.wikipedia.org/wiki/Imperative_programming