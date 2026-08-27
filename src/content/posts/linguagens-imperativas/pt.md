---
title: "O Paradigma de Programação Imperativa"
date: 2026-08-26
threads: [ "aprendizado"]
summary: "Uma breve sessão de estudos sobre programação imperativa"
---

Programação imperativa é o primeiro paradigma de programação estudado na faculdade, mesmo que nunca seja mencionado por esse termo. Você o reconhecerá pelas linguagens de programação criadas a partir dele —[^1] C, Perl, JavaScript etc. — devido à sua simplicidade e à maneira "direta" de escrever instruções: reproduzindo o modo imperativo das línguas naturais ("_faça isso_" ou "_faça aquilo nesta ordem_"), dizendo ao computador o que fazer (e **como** fazer), passo a passo, usando variáveis e **alterando o estado do processo** durante a execução.

Veja abaixo os detalhes de cada uma das características mencionadas.

## Por exemplo

A maior parte do que descrevi acima fica mais clara com um exemplo em C.

```c
int a = 0, b = 5, i;      //Define 'a' como 0, 'b' como 5 e 'i' permanece não inicializada

for(i = 0; i < b; i++){   //Define 'i' como 0; enquanto seu valor for menor que o valor de 'b', execute o bloco abaixo e adicione 1 ao valor de 'i'
	if(i == 2){           //Se 'i' for igual a 2, execute o bloco de código abaixo
		printf("%d", i);  //Imprima no terminal o valor de 'i'
	}
	else a++;             //Se o valor não for igual a 2, adicione 1 ao valor de 'a'
}
```


Perceba como todo o bloco de código, com base nos comentários de cada linha, é realmente inspirado pelo modo imperativo. Além disso, observe como a **ordem** dos comandos é bastante específica.

Além disso, tanto a linha do laço `for` quanto a instrução `else` são exemplos de alteração do estado do processo durante sua execução — os valores de 'i' e 'a' mudam constantemente na memória, de modo que o computador nunca repete seus processos exatamente da mesma forma que antes.

---
[^1]: Nenhuma IA foi usada na escrita deste post; eu apenas gosto muito de usar travessões.

## Referências

* Sebesta, R. W. (2018). *Concepts of programming languages* (12th ed.). Pearson.
* Imperative programming. (2026, August 15). In *Wikipedia*. https://en.wikipedia.org/wiki/Imperative_programming